# RFC: Schema-Driven Types for TCGdex

**Author:** Ryan (FalconChipp)  
**Status:** Draft  
**Target:** `tcgdex/cards-database` (new `schema/` package, V3 PR)

---

## Problem

The TCGdex card database has three distinct data shapes — input, compiled, and output — with no shared contract between them:

| Shape | Where | Example |
|-------|-------|---------|
| **Input** | `interfaces.d.ts` (root) | Localized maps, rich enums (`VariantStamps` ~130 values), template-literal `ISODate` |
| **Compiled** | `server/generated/*/cards.json` | Typed as `any` (`Card.ts:28`), loaded with `@ts-ignore` |
| **Output** | `@tcgdex/sdk` type declarations | Flattened enums (all `string`), no `variants_detailed`, no `pricing`, no `updated` |

The SDK defines the output types, and the server *imports them back* (`server/src/V2/Components/Card.ts:2`):

```ts
import type { CardResume, Card as SDKCard } from '@tcgdex/sdk'
```

This creates a **backwards dependency**: the server depends on its own consumer for types. When the server adds fields (like `pricing` in `loadCard()`), the SDK type doesn't know — the field exists at runtime but is invisible to TypeScript. Drift is silent and cumulative.

### Evidence: Live Drift (Demonstrated by POC)

Running the POC's `validate-live` script against `api.tcgdex.net/v2/en/cards/base1-4` (Charizard, Base Set) produces:

```
✓ live base1-4 validates against Card
  note: response also has un-modeled fields: variants_detailed, updated, pricing
```

Three fields the API serves that the SDK type omits entirely:

- **`variants_detailed`** — the rich variant array (`type`/`pricing` per variant). The server builds it in `loadCard()` (line 122), but the SDK's `Card` type only has `variants` (the four booleans). The SDK class *does* declare `variantsDetailed` and remaps via `fill()`, but the type contract (`@tcgdex/sdk` `.d.ts`) never included it.
- **`pricing`** — added by `loadCard()` (line 151–154) from CardMarket/TCGPlayer providers. Ghost property: present at runtime, absent from the type.
- **`updated`** — a timestamp the type omits.

These aren't edge cases. They're on *every card response* for the most popular endpoint.

### Enum Erosion

The SDK types every enum as bare `string`:

```ts
// from @tcgdex/sdk .d.ts
public rarity!: string
public category!: string
public stage?: string
public suffix?: string
public trainerType?: string
public energyType?: string
```

The input types (`interfaces.d.ts`) have full union types for these (e.g., 40 rarity values, 11 stages, 8 suffixes). That precision is lost at the output boundary — SDK consumers get no autocomplete, no exhaustiveness checking, no compile-time safety.

### The Generic That Isn't

The SDK defines `Card<SetType extends SetResume = SetResume>`. The generic parameter is never instantiated with a non-default argument anywhere — not in the server, not in the SDK, not in any consumer. It's vestigial complexity.

---

## Solution: `@tcgdex/schema`

A new package in the cards-database monorepo that defines the **output shape** (what the API serves) as the single source of truth, using [TypeBox](https://github.com/sinclairzx81/typebox) (pinned `0.32.34`).

### Why TypeBox

TypeBox schemas *are* JSON Schema. No compilation step, no `.generate()` — the schema object is already a valid JSON Schema document. This means:

- **OpenAPI 3.1 emission is lossless** — JSON Schema is a proper subset of OpenAPI 3.1's schema object. Drop the schemas into `components/schemas` directly.
- **Runtime validation** — `TypeCompiler.Compile()` produces a validator from the same schema that generates the types. One definition, two uses.
- **`.d.ts` generation** — `json-schema-to-typescript` (or TypeBox's `Static<>`) produces clean TypeScript interfaces from the schema.

Zod was considered but rejected: Zod schemas aren't JSON Schema, so OpenAPI emission requires a lossy `zod-to-json-schema` conversion. TypeBox avoids the impedance mismatch entirely.

### What the Schema Defines

The output contract — the shapes clients receive from the API:

| Schema | Matches |
|--------|---------|
| `CardResume` | Brief card (id, localId, name, image) |
| `Card` | Full card (extends CardResume, all fields including `variants_detailed`, `pricing`, `updated`) |
| `SetResume` | Brief set (id, name, logo, symbol, cardCount) |
| `Set` | Full set (extends SetResume, adds serie, variants, cards, richer cardCount) |
| `SerieResume` | Brief serie (id, name, logo) |
| `Serie` | Full serie (extends SerieResume, adds sets) |
| `Variants` | The four boolean variant flags |

### Open vs. Closed Enums

Not all enums grow at the same rate. The schema distinguishes:

| Enum | Treatment | Rationale |
|------|-----------|-----------|
| `rarity` | **Open** (`string` + `x-extensible-enum`) | 40+ values, new rarities every set release. Open means new values never break validators or generated clients. |
| `stage` | **Open** | Has grown historically (VMAX, VSTAR, V-UNION added over time). |
| `suffix` | **Open** | Same — EX, GX, V, ex are generation-specific, more will come. |
| `category` | **Closed** (union) | Pokemon / Trainer / Energy — hasn't changed since the game launched. |
| `types` (Pokemon) | **Closed** | 11 types, stable since Fairy was added in XY. |
| `energyType` | **Closed** | Normal / Special — binary, stable. |
| `trainerType` | **Closed** | Supporter / Item / Stadium / Tool + legacy. Rarely grows. |
| `abilityType` | **Closed** | Pokemon Power / Poke-BODY / Poke-POWER / Ability / Ancient Trait. |

Implementation:

```ts
// Closed: real union in .d.ts, strict validation
function ClosedEnum(values) {
  return Type.Union(values.map(v => Type.Literal(v)))
}

// Open: validates as string (new values never throw),
// known values ride along as metadata for docs + codegen
function OpenEnum(values) {
  return Type.String({ 'x-extensible-enum': values })
}
```

### Wire Format vs. SDK Convention

The API returns `variants_detailed` (snake_case). The JS SDK presents `variantsDetailed` (camelCase), remapping in the Card class's `fill()` override:

```ts
protected override fill(obj: object): void {
  objectLoop(obj, (value, key: string) => {
    if (key === 'variants_detailed') {
      key = 'variantsDetailed'
    }
    (this as any)[key] = value
  })
}
```

**The schema defines the wire format** — snake_case `variants_detailed` — because it's the API contract and what validators check against. Two options for the JS SDK: (A) match the wire format by renaming the class property `variantsDetailed` → `variants_detailed` and dropping the `fill()` remap; (B) keep camelCase on the class and add a `CamelCard` mapped type to the schema as a follow-up. Option A is a one-line breaking change on one field name; option B preserves JS convention at the cost of a utility type. See [`docus/sdk-migration.md`](./docus/sdk-migration.md#3-handle-the-wire-format-vs-camelcase-naming).

---

## JS SDK Integration

The SDK uses runtime classes extending a `Model` base class, not plain interfaces. `Model.fill()` copies API response properties onto `this`. The migration preserves this architecture entirely.

### Current SDK Architecture

```
Model (base: sdk ref, fill())
  └─ CardResume (id, localId, name, image)
       └─ Card (all fields, overrides fill() for variants_detailed remap)
  └─ SetResume → Set
  └─ SerieResume → Serie
```

### Migration: `implements` Pattern

```ts
import type { Card as CardShape } from '@tcgdex/schema'

export default class Card extends CardResume implements CardShape {
  // Existing properties stay
  // Add: pricing, updated (were ghost properties — runtime-present, type-absent)
  // Tighten: category from string → union (non-breaking for consumers)
  // fill() remap stays as-is
}
```

**Key properties:**
- `@tcgdex/schema` is a **devDependency** — types only, zero runtime footprint in the SDK bundle
- `implements CardShape` makes drift a **compile error** — if the schema adds a field and the class doesn't declare it, `tsc` fails
- `fill()` and the `Model` base class don't change at all
- Consumers of `@tcgdex/sdk` get tighter types automatically (closed enum unions instead of bare `string`)

### Optional: Runtime Validation

The SDK can optionally validate API responses at the fetch boundary:

```ts
import { CardSchema } from '@tcgdex/schema'
import { TypeCompiler } from '@sinclair/typebox/compiler'

const CardValidator = TypeCompiler.Compile(CardSchema)

// in the fetch path:
const data = await res.json()
if (!CardValidator.Check(data)) {
  throw new Error('API response does not match Card schema')
}
```

This catches server-side regressions at runtime. It's a nice-to-have, not a requirement for the type contract to work.

### Other SDKs (Java, Kotlin, Python, etc.)

Non-JS SDKs consume the OpenAPI document generated from the schema:

```
@tcgdex/schema → emit-openapi → openapi.json → openapi-generator → SDK
```

The `x-extensible-enum` extension requires Mustache template overrides in `openapi-generator` to produce real enums (the default ignores vendor extensions). This is a known, documented customization.

---

## OpenAPI

The server currently maintains a hand-written `server/public/v2/openapi.yaml` (1705 lines, OpenAPI 3.1.0), served via swagger-ui at `/v2/openapi`. The apis.guru listing is unofficial (2.0.0, stale).

With the schema package, OpenAPI generation becomes:

```ts
const doc = {
  openapi: '3.1.0',
  info: { title: 'TCGdex API', version: '2.0.0' },
  components: {
    schemas: {
      Card: CardSchema,
      CardResume: CardResumeSchema,
      Set: SetSchema,
      // ...
    }
  }
}
```

The schemas drop in directly because TypeBox schemas are JSON Schema — no conversion step. Path/operation definitions still need to be maintained separately (they describe routing, not data shapes), but the `components/schemas` section — the largest and most drift-prone part — is now generated.

---

## Staging

### Stage 1: Schema Package (This PR)

- New `schema/` directory in `cards-database` monorepo
- Defines V2 output shapes in TypeBox
- Emits `dist/types.d.ts` and `dist/openapi.json`
- Validates against live API
- **No changes to server or SDK**

### Stage 2: SDK Adoption

- `@tcgdex/schema` published to npm
- JS SDK adds `implements` constraints
- Ghost properties (`pricing`, `updated`) declared on Card class
- Closed enum unions flow through to SDK consumers
- **Non-breaking** — tighter types are backwards-compatible

### Stage 3: V3 Breaking Changes

- `variants` (boolean flags) deprecated, `variants_detailed` becomes primary
- Root `pricing` removed — per-variant pricing on `variants_detailed[]` becomes the single source (as noted in `Card.ts:141`)
- Any other breaking rename/removal decided by the maintainers rides here
- Versioned in the schema (`version: '3.0.0'`), breaking changes ride the major version

### Stage 4: Server Adoption

- Server imports types from `@tcgdex/schema` instead of `@tcgdex/sdk`
- Backwards dependency eliminated
- Compiled card data gets typed (replaces `any` / `@ts-ignore`)

---

## POC

A working proof-of-concept lives at `schema/` in this PR. It demonstrates the full pipeline:

```bash
cd schema && npm install && npm run demo
```

This runs three steps:

1. **`emit:dts`** — generates `dist/types.d.ts` with clean interfaces. Closed enums become real unions (`"Pokemon" | "Trainer" | "Energy"`), open enums stay `string`.
2. **`emit:openapi`** — generates `dist/openapi.json`: a full OpenAPI 3.1 document with **33 paths, 9 component schemas**, RFC 9457 `application/problem+json` error responses, and `x-extensible-enum` metadata on every open enum field.
3. **`validate:live`** — fetches Charizard (base1-4) from the live API and validates against the Card schema. On the current run it passes clean with no un-modeled fields — `variants_detailed`, `pricing`, and `updated` (all ghost properties on the current SDK type) are now modeled.

**End-to-end proof:** running `openapi-generator-cli` against `dist/openapi.json` produces a working Python SDK (Pydantic models). The generator processes all 33 paths, resolves inline schemas, and preserves `x-extensible-enum` metadata. See `dist/generated-python-sample/tcgdex/models/card.py` after running the command in the README. A Mustache template that converts `x-extensible-enum` into real Python enums with an `UNKNOWN` fallback is sketched at [`docus/python-template-sketch.mustache`](./docus/python-template-sketch.mustache) — Stage 2b work, non-blocking.

### Package Structure

```
schema/
  src/
    enums.ts         # Open/Closed enum helpers + value lists
    resume.ts        # CardResume, SetResume, SerieResume, Variants
    card.ts          # Card (full shape with variants_detailed, pricing, updated)
    set.ts           # Set, Serie
    index.ts         # Barrel exports: types, schemas, enums
  build/
    emit-dts.ts      # json-schema-to-typescript → dist/types.d.ts
    emit-openapi.ts  # Assembles full OpenAPI 3.1 doc (paths + schemas + errors)
    validate-live.ts # Fetches live card, validates, reports drift
  docus/
    sdk-migration.md              # JS SDK adoption guide (implements pattern)
    python-template-sketch.mustache  # x-extensible-enum override sketch (Stage 2b)
    workflows/
      README.md                   # Explains the release → regenerate loop
      publish-and-notify.yml      # Publisher example (cards-database)
      sdk-regenerate.yml          # Consumer example (per SDK repo)
  dist/                           # Generated (gitignored)
    types.d.ts
    openapi.json
  README.md                       # How to run the demo + what to look at
  RFC.md                          # This document
```

### Dependencies

| Package | Version | Why |
|---------|---------|-----|
| `@sinclair/typebox` | `0.32.34` (pinned) | JSON-Schema-native schema definitions |
| `json-schema-to-typescript` | `^15.0.0` (dev) | Readable `.d.ts` output (avoids TypeBox `Static<>` gunk) |
| `tsx` | `^4.19.0` (dev) | Run TypeScript build scripts |
| `typescript` | `^5.5.0` (dev) | Type checking |

---

## FAQ

**Why not Zod?**  
Zod schemas aren't JSON Schema. Emitting OpenAPI requires `zod-to-json-schema`, which is lossy (vendor extensions, `$ref` handling, nullable semantics all have edge cases). TypeBox schemas *are* JSON Schema — the conversion is identity, not translation.

**Why `json-schema-to-typescript` instead of `Static<>`?**  
TypeBox's `Static<typeof Card>` produces correct types, but the `.d.ts` output from `tsc --emitDeclarationOnly` is unreadable — deeply nested `TObject<TString<...>>` wrappers instead of clean `interface Card { id: string }`. `json-schema-to-typescript` generates human-readable interfaces from the JSON Schema representation.

**Why define the output shape, not the input shape?**  
The input shape (`interfaces.d.ts`) describes what data contributors write. The output shape describes what the API serves and what SDKs consume. The drift problem is at the output boundary — contributors don't use the SDK types, but every API consumer does.

**What about `x-extensible-enum` in codegen?**  
`openapi-generator` ignores vendor extensions by default. Generating real enums from `x-extensible-enum` requires Mustache template overrides. This is a documented pattern and a one-time setup per target language.

**Does the SDK need a runtime dependency on `@tcgdex/schema`?**  
No. The JS SDK uses it as a devDependency for `implements` type checking. The schema types are erased at compile time — zero bytes added to the SDK bundle. Runtime validation (via `TypeCompiler`) is optional and would be the only reason for a runtime dependency.

**What about the Card generic (`Card<SetType>`)?**  
It's vestigial. `Card<SetType extends SetResume = SetResume>` is never instantiated with a non-default argument anywhere in the server or SDK. The schema models `set` as concrete `SetResume`. The generic can be preserved for backwards compatibility in the SDK class if needed, but the schema doesn't encode it.
