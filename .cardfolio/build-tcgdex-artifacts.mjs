import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const LANGUAGES = ["en","fr","es","es-mx","it","pt","pt-br","pt-pt","de","nl","pl","ru","ja","ko","zh-tw","id","th","zh-cn"];
const generatedDir = resolve(process.argv[2] ?? "server/generated");
const outputDir = resolve(process.argv[3] ?? "catalog-artifacts");
const priorManifestPath = process.argv[4] ? resolve(process.argv[4]) : null;
const sourceSha = process.env.TCGDEX_SOURCE_SHA ?? process.env.GITHUB_SHA ?? "local";
await mkdir(outputDir, { recursive: true });

const sets = new Map();
const cards = new Map();
const localized = new Map(LANGUAGES.map((language) => [language, []]));

function positiveId(value) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function normalizedStamps(value) {
  return Array.isArray(value) ? [...new Set(value)].sort() : [];
}

function generatedVariantId(cardId, variant) {
  const signature = JSON.stringify({
    type: variant.type ?? "normal",
    subtype: variant.subtype ?? null,
    size: variant.size ?? "standard",
    stamp: normalizedStamps(variant.stamp),
    foil: variant.foil ?? null,
  });
  return `generated-${createHash("sha256").update(`${cardId}:${signature}`).digest("hex").slice(0, 16)}`;
}

function variantLabel(variant) {
  return [
    variant.type ?? "Normal",
    variant.subtype,
    variant.size && variant.size !== "Standard" && variant.size !== "standard" ? variant.size : null,
    ...normalizedStamps(variant.stamp),
    variant.foil,
  ].filter(Boolean).join(" · ");
}

function normalizeRecords(records, artifactName) {
  const normalized = new Map();
  for (const record of records) {
    const key = `${record.entityType}|${record.sourceId}|${record.language}`;
    const existing = normalized.get(key);
    if (!existing) {
      normalized.set(key, record);
      continue;
    }
    if (JSON.stringify(existing.payload) === JSON.stringify(record.payload)) continue;

    if (record.entityType === "variant") {
      const existingComparable = { ...existing.payload, tcgplayerProductId: null };
      const incomingComparable = { ...record.payload, tcgplayerProductId: null };
      if (JSON.stringify(existingComparable) === JSON.stringify(incomingComparable)) {
        normalized.set(key, {
          ...existing,
          payload: {
            ...existing.payload,
            tcgplayerProductId: existing.payload.tcgplayerProductId ?? record.payload.tcgplayerProductId ?? null,
          },
        });
        continue;
      }
    }
    if (record.entityType === "set_localization") {
      const existingComparable = { ...existing.payload, name: null, alternateNames: null };
      const incomingComparable = { ...record.payload, name: null, alternateNames: null };
      if (JSON.stringify(existingComparable) === JSON.stringify(incomingComparable)) {
        const alternateNames = Array.from(new Set([
          ...(existing.payload.alternateNames ?? []),
          existing.payload.name,
          ...(record.payload.alternateNames ?? []),
          record.payload.name,
        ].filter(Boolean)));
        normalized.set(key, {
          ...record,
          payload: { ...record.payload, alternateNames },
        });
        continue;
      }
    }

    throw new Error(`Conflicting duplicate record ${key} in ${artifactName}`);
  }
  return [...normalized.values()];
}

for (const language of LANGUAGES) {
  const languageSets = JSON.parse(await readFile(join(generatedDir, language, "sets.json"), "utf8"));
  const languageCards = JSON.parse(await readFile(join(generatedDir, language, "cards.json"), "utf8"));
  for (const set of languageSets) {
    sets.set(set.id, {
      entityType: "set",
      sourceId: set.id,
      language: "",
      payload: {
        id: set.id,
        seriesId: set.serie?.id ?? null,
        releaseDate: set.releaseDate ?? null,
        thirdParty: set.thirdParty ?? null,
      },
    });
    localized.get(language).push({
      entityType: "set_localization",
      sourceId: set.id,
      language,
      payload: {
        setId: set.id,
        name: set.name,
        logoUrl: set.logo ?? null,
        symbolUrl: set.symbol ?? null,
        abbreviation: set.abbreviation ?? null,
      },
    });
  }
  for (const card of languageCards) {
    const cardId = card.id;
    cards.set(cardId, {
      entityType: "card",
      sourceId: cardId,
      language: "",
      payload: {
        id: cardId,
        setId: card.set?.id,
        number: card.localId ?? null,
        tcgplayerProductId: positiveId(card.thirdParty?.tcgplayer),
        category: card.category ?? null,
        rarity: card.rarity ?? null,
        regulationMark: card.regulationMark ?? null,
      },
    });
    localized.get(language).push({
      entityType: "card_localization",
      sourceId: cardId,
      language,
      payload: {
        cardId,
        name: card.name,
        imageUrl: card.image ?? null,
        illustrator: card.illustrator ?? null,
        updated: card.updated ?? null,
      },
    });
    const variants = Array.isArray(card.variants_detailed) && card.variants_detailed.length
      ? card.variants_detailed
      : [{ type: "normal", size: "standard", variantId: "generated" }];
    for (const variant of variants) {
      const variantId = variant.variantId && variant.variantId !== "generated"
        ? String(variant.variantId)
        : generatedVariantId(cardId, variant);
      localized.get(language).push({
        entityType: "variant",
        sourceId: `${cardId}:${variantId}`,
        language,
        payload: {
          cardId,
          variantId,
          type: variant.type ?? "normal",
          subtype: variant.subtype ?? null,
          size: variant.size ?? "standard",
          stamps: normalizedStamps(variant.stamp),
          foilPattern: variant.foil ?? null,
          displayName: variantLabel(variant),
          tcgplayerProductId: positiveId(variant.thirdParty?.tcgplayer),
        },
      });
    }
  }
}

async function writeArtifact(name, records) {
  const ndjsonPath = join(outputDir, `${name}.ndjson`);
  const gzipPath = `${ndjsonPath}.gz`;
  await writeFile(ndjsonPath, records.map((record) => JSON.stringify(record)).join("\n") + "\n");
  await pipeline(createReadStream(ndjsonPath), createGzip({ level: 9 }), createWriteStream(gzipPath));
  const bytes = await readFile(gzipPath);
  return {
    name: basename(gzipPath),
    records: records.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
  };
}

const coreRecords = normalizeRecords([...sets.values(), ...cards.values()], "core");
for (const language of LANGUAGES) {
  localized.set(language, normalizeRecords(localized.get(language), language));
}
const files = [];
files.push(await writeArtifact("core", coreRecords));
for (const language of LANGUAGES) files.push(await writeArtifact(language, localized.get(language)));
const allRecords = [...coreRecords, ...LANGUAGES.flatMap((language) => localized.get(language))];
const counts = Object.fromEntries(["set","set_localization","card","card_localization","variant"].map((entityType) => [
  entityType,
  allRecords.filter((record) => record.entityType === entityType).length,
]));
for (const card of cards.values()) {
  if (!sets.has(card.payload.setId)) throw new Error(`Card ${card.sourceId} references missing set ${card.payload.setId}`);
}
if (priorManifestPath) {
  const prior = JSON.parse(await readFile(priorManifestPath, "utf8"));
  for (const [entityType, priorCount] of Object.entries(prior.counts ?? {})) {
    if (priorCount > 0 && (counts[entityType] ?? 0) < Math.floor(priorCount * 0.95)) {
      throw new Error(`${entityType} count fell more than five percent (${priorCount} to ${counts[entityType] ?? 0})`);
    }
  }
}
const manifest = {
  schemaVersion: 1,
  provider: "tcgdex",
  sourceSha,
  compiledAt: new Date().toISOString(),
  languageCount: LANGUAGES.length,
  languages: LANGUAGES,
  counts,
  files,
};
await writeFile(join(outputDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify({ outputDir, sourceSha, counts, files: files.length }));
