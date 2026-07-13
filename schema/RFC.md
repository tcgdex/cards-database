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

### Language coverage

Consumers in any language can build against the schema. Two distribution channels:

- **JS/TS consumers** install `@tcgdex/schema` from npm — types, runtime validators, and enum constants ready to import
- **All other languages** consume `openapi.json` from the GitHub Release — feed it to `openapi-generator`, `quicktype`, Microsoft `Kiota`, Apple `swift-openapi-generator`, `datamodel-code-generator` (Pydantic), or any of the ~50+ tools that target OpenAPI 3.1 as an IDL

| Language | Toolchain examples |
|---|---|
| Python | `openapi-generator`, `datamodel-code-generator` (Pydantic) |
| Java / Kotlin | `openapi-generator`, `Kiota` |
| Go | `openapi-generator`, `oapi-codegen` |
| Rust | `openapi-generator`, `progenitor` |
| Swift | `openapi-generator`, `swift-openapi-generator` (Apple official) |
| C# / .NET | `openapi-generator`, `NSwag`, `Kiota` |
| Ruby, PHP, Dart, Elixir, Scala, Perl, Haskell, R, Julia … | `openapi-generator` |
| Any language | `quicktype`, `Speakeasy`, `Fern` |

The schema package is authored in TypeScript, but the contract it publishes (`openapi.json`) is language-agnostic. Adding a new SDK target means writing one CI workflow (see [`docus/workflows/sdk-regenerate.yml`](./docus/workflows/sdk-regenerate.yml)), not hand-authoring types.

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

## The schema as a public API contract

Publishing `@tcgdex/schema` to npm as a standalone package is not just an internal codegen input — it becomes a first-class dependency for anyone building against the TCGdex API without a first-party SDK. This is a distinct benefit from the SDK integration, worth calling out separately.

### Concrete third-party use cases

- **Devs hand-rolling `fetch` calls** get typed responses without pulling the full `@tcgdex/sdk` runtime — `npm i @tcgdex/schema` gives them `Card`, `Set`, `Serie` interfaces plus optional runtime validators
- **Alternative and community SDKs** (framework-specific wrappers, forks, non-JS ports in TS) build on the same contract instead of reinventing the type surface
- **Backend services** proxying or caching TCGdex data can validate responses at their boundary before serving them onward
- **UI teams** import enum lists as runtime constants for form-builders — rarity filters, language pickers, category dropdowns — instead of hardcoding lists that go stale on every new set release
- **Documentation and tooling projects** use `dist/openapi.json` directly as a dependency (swagger-ui, redoc, Stoplight Elements — no scraping the server's YAML)

Folded into `cards-database` (rather than published as a standalone package), none of this is really consumable — asking third parties to `npm i @tcgdex/cards-database` for a frontend is a non-starter. As its own package, `@tcgdex/schema` earns its keep independently of the SDK regeneration story.

### Query authoring

TCGdex has a rich query surface — 33 endpoints, filter/sort/pagination on every list, dozens of filterable fields. Currently, consumers writing queries have to read the docs and hope. With `@tcgdex/schema` as a dependency:

- **Field discovery via autocomplete** — the query field list *is* the `Card` schema; IDEs surface it as the user types
- **Enum values as runtime constants** — `import { Enums } from '@tcgdex/schema'`; `Enums.RARITIES` is the array. Rarity filter UIs stop hardcoding stale lists.
- **Compile-time validation of filter values** — `filter('rarity', 'Rare')` type-checks; `filter('rarity', 'super-rare')` errors before the request fires
- **Typed responses** — the result is `Card[]`, autocomplete flows through into consumer code, no `any` at the API boundary
- **Interactive query playground** — anyone can point swagger-ui / redoc / Stoplight at `dist/openapi.json` and get a live query builder without touching the tcgdex codebase

Basically: raises the API's ergonomics for query authors from "read the docs and hope" to "TS tells you what's valid as you type." For a filter/sort/paginate API with the surface TCGdex has, that DX gain is substantial.

### Precedent

Publishing a types/schema package separately from the full SDK is a well-established pattern — Stripe's `@stripe/stripe-js`, AWS's `@aws-sdk/types`, Anthropic's SDK-independent types packages, and many others. Consumers who want the contract without the runtime are a normal audience for any public API.

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

## Documentation site

Docs drift is the same root cause as type drift: hand-maintained documentation of shapes that live somewhere else. Every reported "the docs say X but the API returns Y" bug is the same failure mode this RFC diagnoses for SDK types, just downstream of a different consumer.

Once `dist/openapi.json` exists as a first-class artifact, it becomes the source of truth for reference documentation the same way it does for SDKs. Any mainstream OpenAPI renderer consumes it directly:

- **Redoc** — single-page reference, embeddable as `<redoc spec-url="openapi.json">`
- **Swagger UI** — already what `tcgdex.dev` serves at `/v2/openapi`; would consume the generated file instead of the hand-maintained YAML
- **Stoplight Elements** — modern web components, embeddable in an existing site
- **Mintlify, Fern, Bump.sh, Scalar** — hosted docs platforms with rich UX, all consume OpenAPI directly

### What stops drifting

Comparing the categories of "wrong docs" reports to what schema-driven reference eliminates:

| Doc bug class | Currently possible? | After schema adoption? |
|---|---|---|
| "Docs list field X but API returns Y" | Yes | No — reference *is* the schema |
| "Field typed `string` in docs but `number` in reality" | Yes | No |
| "Rarity 'X' isn't in the docs list" | Yes | No — `x-extensible-enum` carries through |
| "Endpoint returns 429 but docs don't mention it" | Yes | No — error responses are modelled |
| "Filter param name typo" | Yes | No — params live in the schema |
| "Example response is stale" | Yes | Partially — see below |

### What still needs hand-authoring

Prose material — getting-started tutorials, "how pagination works" explainers, filter syntax examples, migration guides between API versions — stays hand-written. But that's a **bounded surface** that changes rarely. The volatile, drift-prone parts are exactly the parts the schema owns.

The docs site becomes a two-layer structure, matching the pattern used by Stripe, Anthropic, GitHub, and every modern API docs site:

- **Reference (auto)** — endpoints, schemas, enums, error shapes, request/response examples → rendered from `openapi.json`
- **Guides (hand)** — tutorials, concepts, migration guides → prose, with links into the auto-generated reference

Prose can still be wrong, but it can't lie about field types — the reference is right there next to it.

### Live example responses

`build/validate-live.ts` currently validates a live card against the schema. A two-line extension makes it dump the validated card as an OpenAPI `example` on the response:

```ts
// after C.Check(data) passes:
const responseExample = { summary: 'Live Charizard', value: data }
// injected into openapi.json under paths['/cards/{cardId}'].get.responses['200'].content['application/json'].examples
```

Docs then show a **real API response** as the example, not a hand-typed placeholder that goes stale on the next set release. Runs in CI on every schema build; examples update automatically alongside the schema.

### Migration path

The docs site adoption is Stage 2 work — non-breaking, independent of SDK adoption:

1. Point the existing swagger-ui at the generated `openapi.json` instead of the hand-maintained YAML
2. Optionally add a richer renderer (Redoc / Stoplight / Mintlify) for the reference layer
3. Deprecate `server/public/v2/openapi.yaml` once parity is confirmed
4. Prose guides live wherever they live today — untouched

No content is lost; the drift-prone reference layer just stops being hand-maintained.

---

## Considered alternatives

Two alternatives came up in discussion. Both are compatible with the RFC's core diagnosis (the SDK shouldn't be the source of truth) — the disagreement is only about *where* the truth should live and *what tooling* expresses it.

### Alternative A: `interfaces.d.ts` as SoT via `typescript-json-schema`

Rather than authoring TypeBox schemas in a new `schema/` package, treat `interfaces.d.ts` (the file contributors already edit) as the source of truth, and derive JSON Schema from the existing TypeScript types using [`typescript-json-schema`](https://github.com/YousefED/typescript-json-schema) (or the sibling `ts-json-schema-generator`).

Dependency direction flips from what this RFC proposes:

```
Current RFC:  schema (authored, owns enums + shapes)
                 ├─→ cards-database/server
                 └─→ SDKs

Alternative A: cards-database/interfaces.d.ts (input SoT)
                     ↓
                schema/output.d.ts (plain TS, imports shared enums, adds output-only fields)
                     ↓ typescript-json-schema
                JSON Schema → OpenAPI → SDKs
```

**Compelling:**

- Follows the actual data flow — contributors → compiler → server → clients — rather than layering schema alongside cards-database
- Enum drift risk killed entirely: one file, one set of values, `Exclude<>` / `Extract<>` for narrowing
- Already recognisable to contributors — no new DSL, plain TypeScript throughout
- The SDK stops being a truth source and becomes what it should be: a wrapper

**Tradeoffs:**

- **Loses free runtime validation.** TypeBox schemas *are* validators (`TypeCompiler.Compile`). `typescript-json-schema` produces JSON Schema but no runtime `.Check()` — validation would require a separate step (e.g. ajv). Not a blocker if consumers trust the server's response shape.
- **Vendor extensions get more awkward.** TypeBox lets `x-extensible-enum` be a schema option. `typescript-json-schema` carries it as a JSDoc `@` annotation, which is ordering-sensitive and depends on the tool honoring it. SDK codegen becomes "author schema + author JSDoc" instead of "author schema."
- **Draft mismatch.** `typescript-json-schema` defaults to JSON Schema draft-7; OpenAPI 3.1 uses draft 2020-12. Fixable via config but one more thing to get right.
- **Extra build step.** TypeBox schemas evaluate at import — no compile phase. `typescript-json-schema` runs a TS compiler pass, which adds cold-start time and a moving piece to CI.
- **Type expressiveness ceiling.** Template literals (like `ISODate` in `interfaces.d.ts`), conditional types, and complex mapped types don't always survive the conversion cleanly. TypeBox has explicit primitives for these; `typescript-json-schema` sometimes forces simplification of the input TS.
- **Output shape still requires separate authoring.** The server adds `pricing`, `updated`, and `variants_detailed` at request time in `loadCard()`. These fields don't exist in `interfaces.d.ts` and shouldn't (contributors don't write pricing data). So a separate `output.d.ts` is still authored either way; the alternative moves the authoring from TypeBox schemas to plain TS interfaces, but doesn't eliminate the work.

**Verdict:** genuinely worth considering. The RFC's core claims — silent drift, output isn't a SoT today, OpenAPI can be generated — hold under either approach. The choice is really about authoring ergonomics (TypeBox DSL vs plain TS with JSDoc), tooling weight (one tool vs two), and whether runtime validation is worth free schema-language cost.

### Alternative B: Shared enum lists only (a hybrid)

Regardless of which side authors the shapes, the enum *value lists* can live in one file that both sides import. `interfaces.d.ts` (or a new `enums.ts`) becomes the canonical list of rarities, stages, suffixes, Pokemon types, etc.; `@tcgdex/schema` (whether TypeBox or plain TS) imports the same values.

```ts
// shared file
export const RARITIES = ['Common', 'Uncommon', ...] as const

// interfaces.d.ts uses RARITIES for input
// @tcgdex/schema uses RARITIES for output
```

**What this captures:** the biggest drift risk in practice is enum values — new rarities get added to `interfaces.d.ts` when a set drops, and the SDK type stays as bare `string`. Sharing the enum arrays eliminates that risk regardless of which side owns the shapes.

**What this preserves:** two distinct shape authorings, because input ≠ output (localization, augmentation). Contributors keep their input file; the schema keeps its output file; neither side has to know about the other beyond the shared enum imports.

This hybrid is compatible with the RFC as proposed — it can be adopted as a follow-up regardless of whether the schema is TypeBox-authored or `typescript-json-schema`-derived. Low-cost, high-value.

### Why the RFC still proposes TypeBox + peer package

The current proposal preserves three things Alternative A gives up:

1. **Free runtime validation** — TypeBox schemas double as validators. For downstream consumers who *do* want to validate (backend proxies, cached-response verifiers, defensive JS SDKs), this is a real benefit.
2. **Vendor extensions as first-class schema options** — `x-extensible-enum` on `OpenEnum(RARITIES)` is more ergonomic and less tool-dependent than JSDoc annotations.
3. **Independent versioning of the type contract** — a peer package can version separately from card data. A schema change ships without waiting for a set release; a set release ships without touching the schema.

But the alternative is a legitimate reading of the same diagnosis, and the RFC does not consider it settled. If maintainers prefer the derivation-from-input approach, the POC can be rebuilt on `typescript-json-schema` — the RFC's structural claims all still hold.

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

**Why publish `@tcgdex/schema` as its own npm package instead of folding it into cards-database or the SDK?**  
Three reasons: (1) different concerns and release cadences — schema changes when the type contract changes; card data changes when a new set drops. Coupling them forces artificial version bumps. (2) Third-party consumability — anyone building against the TCGdex API without the first-party SDK can `npm i @tcgdex/schema` for types + validators + enum constants. Folded into cards-database, `npm i @tcgdex/cards-database` for a frontend is a non-starter. (3) The pattern is well-established (Stripe, AWS, Anthropic all ship types packages independently of full SDKs). See [The schema as a public API contract](#the-schema-as-a-public-api-contract) for the full case.
