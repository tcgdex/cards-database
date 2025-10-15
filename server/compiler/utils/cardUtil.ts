/* eslint-disable sort-keys */
import pathLib from "node:path";
import { Card, Set, SupportedLanguages, Types } from "../../../interfaces";
import { CardResume, Card as CardSingle } from "../../../meta/definitions/api";
import { getSet, setToSetSimple } from "./setUtil";
import translate from "./translationUtil";
import {
	DB_PATH,
	cardIsLegal,
	fetchRemoteFile,
	getDataFolder,
	getLastEdit,
	resolveText,
	smartGlob,
} from "./util";
import { objectMap, objectPick } from "@dzeio/object-util";
import { variant_detailed } from "../../public/v2/api";

export async function getCardPictures(
	cardId: string,
	card: Card,
	lang: SupportedLanguages
): Promise<string | undefined> {
	try {
		const file = await fetchRemoteFile(
			"https://assets.tcgdex.net/datas.json"
		);
		const fileExists = Boolean(
			file[lang]?.[card.set.serie.id]?.[card.set.id]?.[cardId]
		);
		if (fileExists) {
			return `https://assets.tcgdex.net/${lang}/${card.set.serie.id}/${card.set.id}/${cardId}`;
		}
	} catch {
		return undefined;
	}
	return undefined;
}

export async function cardToCardSimple(
	id: string,
	card: Card,
	lang: SupportedLanguages
): Promise<CardResume> {
	const cardName = resolveText(card.name, lang);
	if (!cardName) {
		throw new Error(`Card (${card.set.id}-${id}) has no name in (${lang})`);
	}
	const img = await getCardPictures(id, card, lang);
	return {
		id: `${card.set.id}-${id}`,
		image: img,
		localId: id,
		name: cardName,
	};
}

function variantsDetailedToVariants(
	variants_detailed: Array<variant_detailed>
): CardSingle["variants"] {
	return {
		firstEdition:
			variants_detailed?.some((variant) =>
				variant.stamp?.some((stamp) => stamp === "1st edition")
			) ?? false,
		holo:
			variants_detailed?.some((variant) => variant.type === "holo") ??
			false,
		normal:
			variants_detailed?.some((variant) => variant.type === "normal") ??
			false,
		reverse:
			variants_detailed?.some((variant) => variant.type === "reverse") ??
			false,
		wPromo:
			variants_detailed?.some((variant) =>
				variant.stamp?.some((stamp) => stamp === "w-Promo")
			) ?? false,
	};
}

function variantsToVariantsDetailed(variants: CardSingle['variants'],lang: SupportedLanguages): Array<variant_detailed> {
	const result: Array<variant_detailed> = [];
	const addVariant = (type: string, stamps: string[] = []) => {
		result.push({
			type,
			size: translate('variantSize', "standard", lang) as any,
			stamp: stamps.length > 0 ? stamps : undefined
		});
	};

	if (typeof variants?.normal === "boolean" ? variants.normal : true) {
		addVariant("normal");
		if (variants?.firstEdition) addVariant("normal", ["1st edition"]);
		if (variants?.wPromo) addVariant("normal", ["w-Promo"]);
	}
	if (typeof variants?.reverse === "boolean" ? variants.reverse : true) {
		addVariant("reverse");
		if (variants?.firstEdition) addVariant("reverse", ["1st edition"]);
	}
	if (typeof variants?.holo === "boolean" ? variants.holo : true) {
		addVariant("holo");
		if (variants?.firstEdition) addVariant("holo", ["1st edition"]);
	}

	return result.length > 0 ? result : undefined;
}

// eslint-disable-next-line max-lines-per-function
export async function cardToCardSingle(
	localId: string,
	card: Card,
	lang: SupportedLanguages
): Promise<CardSingle> {
	const image = await getCardPictures(localId, card, lang);

	if (!card.name[lang]) {
		throw new Error(`Card (${localId}) dont exist in (${lang})`);
	}

	return {
		category: translate("category", card.category, lang) as any,
		id: `${card.set.id}-${localId}`,
		illustrator: card.illustrator,
		image,
		localId,
		name: resolveText(card.name, lang) as string,

		rarity: translate("rarity", card.rarity, lang) as any,
		set: await setToSetSimple(card.set, lang),

		variants: Array.isArray(card.variants)
			? variantsDetailedToVariants(card.variants)
			: {
					firstEdition:
						typeof card.variants?.firstEdition === "boolean"
							? card.variants.firstEdition
							: false,
					holo:
						typeof card.variants?.holo === "boolean"
							? card.variants.holo
							: true,
					normal:
						typeof card.variants?.normal === "boolean"
							? card.variants.normal
							: true,
					reverse:
						typeof card.variants?.reverse === "boolean"
							? card.variants.reverse
							: true,
					wPromo:
						typeof card.variants?.wPromo === "boolean"
							? card.variants.wPromo
							: false,
			  },

		variants_detailed: Array.isArray(card.variants) ? card.variants?.map((variant) => {
			return {
				type: translate('variantType', variant.type, lang) as any,
				subtype: translate('variantSubtype', variant.subtype, lang) as any,
				// only include size when it's not standard
				size: variant.size && variant.size !== 'standard' ? translate('variantSize', variant.size, lang) as any : translate('variantSize', "standard", lang) as any,
				stamp: variant.stamp ? variant.stamp.map((stamp) => {
					return translate('variantStamp', stamp, lang)
				}) : undefined,
				foil: variant.foil ? translate('variantFoil', variant.foil, lang) : undefined
			}
		}) : variantsToVariantsDetailed(card.variants,lang),

		dexId: card.dexId,
		hp: card.hp,
		types: card.types?.map((t) =>
			translate("types", t, lang)
		) as Array<Types>,
		evolveFrom: card.evolveFrom && resolveText(card.evolveFrom, lang),
		weight: card.weight,
		description: card.description
			? (resolveText(card.description, lang) as string)
			: undefined,
		level: card.level,
		stage: translate("stage", card.stage, lang) as any,
		suffix: translate("suffix", card.suffix, lang) as any,
		item: card.item
			? {
					name: resolveText(card.item.name, lang),
					effect: resolveText(card.item.effect, lang),
			  }
			: undefined,

		abilities: card.abilities?.map((el) => ({
			type: translate("abilityType", el.type, lang) as any,
			name: resolveText(el.name, lang),
			effect: resolveText(el.effect, lang),
		})),

		attacks: card.attacks?.map((el) => ({
			cost: el.cost?.map((t) =>
				translate("types", t, lang)
			) as Array<Types>,
			name: resolveText(el.name, lang) as string,
			effect: el.effect ? resolveText(el.effect, lang) : undefined,
			damage: el.damage,
		})),
		weaknesses: card.weaknesses?.map((el) => ({
			type: translate("types", el.type, lang) as Types,
			value: el.value,
		})),

		resistances: card.resistances?.map((el) => ({
			type: translate("types", el.type, lang) as Types,
			value: el.value,
		})),

		retreat: card.retreat,

		effect: card.effect ? resolveText(card.effect, lang) : undefined,

		trainerType: translate("trainerType", card.trainerType, lang) as any,
		energyType: translate("energyType", card.energyType, lang) as any,
		regulationMark: card.regulationMark,

		legal: {
			standard: cardIsLegal("standard", card, localId),
			expanded: cardIsLegal("expanded", card, localId),
		},
		boosters: card.boosters
			? objectMap(
					objectPick(card.set.boosters, ...card.boosters),
					(booster, id) => ({
						id: `boo_${card.set.id}-${id}`,
						name: resolveText(booster.name, lang),
						// images will be coming soon...
					})
			  )
			: undefined,
		updated: await getCardLastEdit(localId, card, lang),

		thirdParty: card.thirdParty,
	};
}

/**
 *
 * @param setName the setname of the card
 * @param id the local id of the card
 * @returns [the local id, the Card object]
 */
export async function getCard(
	set: Set,
	id: string,
	lang: SupportedLanguages
): Promise<Card> {
	try {
		return (
			await import(
				`../../${DB_PATH}/${getDataFolder(lang)}/${
					set.serie.name.en ?? set.serie.name[lang]
				}/${set.name.en ?? set.name[lang]}/${id}.ts`
			)
		).default;
	} catch {
		return (
			await import(
				`../../${DB_PATH}/${getDataFolder(lang)}/${set.serie.id}/${
					set.id
				}/${id}.ts`
			)
		).default;
	}
}

function pLimit(limit: number) {
	const queue: (() => void)[] = [];
	let activeCount = 0;

	const next = () => {
		activeCount--;
		if (queue.length > 0) {
			const fn = queue.shift();
			fn && fn();
		}
	};

	return function <T>(fn: () => Promise<T>): Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const run = () => {
				activeCount++;
				fn().then(resolve, reject).finally(next);
			};

			if (activeCount < limit) {
				run();
			} else {
				queue.push(run);
			}
		});
	};
}

// --- caches ---
const setCache = new Map<string, Set>();
const cardCache = new Map<string, Card>();

async function cachedGetSet(
	setName: string,
	serieName: string,
	lang: SupportedLanguages
): Promise<Set> {
	const key = `${lang}:${serieName}:${setName}`;
	if (setCache.has(key)) return setCache.get(key)!;
	const s = await getSet(setName, serieName, lang);
	setCache.set(key, s);
	return s;
}

async function cachedGetCard(
	set: Set,
	id: string,
	lang: SupportedLanguages
): Promise<Card> {
	const key = `${lang}:${set.id}:${id}`;
	if (cardCache.has(key)) return cardCache.get(key)!;
	const c = await getCard(set, id, lang);
	cardCache.set(key, c);
	return c;
}

/**
 * Get cards filtered by the language they are available in
 * @param lang the language of the cards
 * @param set the set to filter in (optional)
 * @returns An array with the 0 = localId, 1 = Card Object
 */
export async function getCards(
	lang: SupportedLanguages,
	set?: Set
): Promise<Array<[string, Card]>> {
	let cards = await smartGlob(
		`${DB_PATH}/${getDataFolder(lang)}/${
			(set && (set.serie.name.en ?? set.serie.name[lang])) ?? "*"
		}/${(set && (set.name.en ?? set.name[lang])) ?? "*"}/*.ts`
	);

	// fallback to IDs if names didn’t work
	if (cards.length === 0) {
		cards = await smartGlob(
			`${DB_PATH}/${getDataFolder(lang)}/${
				(set && set.serie.id) ?? "*"
			}/${(set && set.id) ?? "*"}/*.ts`
		);
	}

	const limit = pLimit(64); // concurrency cap
	let processed = 0;

	const tasks = cards.map((path) =>
		limit(async () => {
			let items = path.split(pathLib.sep).slice(-3);
			const id = items[2].replace(/\.ts$/, "");
			const setName = items[1];
			const serieName = items[0];

			const setData = await cachedGetSet(setName, serieName, lang);
			if (!(lang in setData.name)) return null;

			const c = await cachedGetCard(setData, id, lang);
			if (!c?.name?.[lang]) return null;

			processed++;
			if (processed % 1000 === 0 || processed === cards.length) {
				console.log(`[${lang}] ${processed}/${cards.length}`);
			}

			return [id, c] as [string, Card];
		})
	);

	const results = (await Promise.all(tasks)).filter(
		(x): x is [string, Card] => x !== null
	);

	// Sort by id when possible
	return results.sort(([a], [b]) => {
		const ra = parseInt(a, 10);
		const rb = parseInt(b, 10);
		if (!isNaN(ra) && !isNaN(rb)) {
			return ra - rb;
		}
		return a.localeCompare(b);
	});
}

export async function getCardLastEdit(
	localId: string,
	card: Card,
	lang: SupportedLanguages
): Promise<string> {
	try {
		const path = `../${getDataFolder(lang)}/${card.set.serie.name.en}/${
			card.set.name.en ?? card.set.name.fr
		}/${localId}.ts`;
		return getLastEdit(path);
	} catch (e) {
		try {
			const path = `../${getDataFolder(lang)}/${card.set.serie.id}/${
				card.set.id
			}/${localId}.ts`;
			return getLastEdit(path);
		} catch (e2) {
			console.error(card);
			console.error(e);
			throw e2;
		}
	}
}
