# Implementation follow-ups

Known gaps in the current POC and RFC wording that need addressing before the
schema package can honestly claim production readiness. Each item is a real
critique of what's in the tree today — not future feature work.

Grouped by kind:
1. **POC code gaps** — the demo works but its coverage/rigour is thin
2. **RFC wording corrections** — claims that overreach the current implementation
3. **Design refinements** — decisions the RFC asserts without adequate treatment

---

## 1. POC code gaps

### 1.1 Provider-specific pricing schemas, including null

**Current state:** `src/card.ts` models pricing as a loose `Record<string, number>` per provider — a placeholder shape. The actual CardMarket and TCGPlayer responses have provider-specific price keys (`averageSellPrice`, `lowPrice`, `trendPrice` for CardMarket; `market`, `low`, `mid`, `high` for TCGPlayer), each with their own optionality and semantics. Pricing objects can also be `null` when the provider has no data for a card, and the current schema doesn't model that.

**What to do:** define `CardmarketPricing` and `TCGPlayerPricing` as first-class schemas with their real fields typed. Make both root `pricing` and per-variant `pricing` nullable via `Type.Union([..., Type.Null()])`. Cross-reference against `server/src/libs/providers/cardmarket.ts` and `.../tcgplayer.ts` for the authoritative field lists.

**Blocks:** Stage 2 SDK adoption — non-JS SDK consumers get a `Record<string, number>` type today, which is nearly useless.

### 1.2 Strict nested validation that detects unmodelled fields

**Current state:** `validate-live.ts` uses TypeBox's `TypeCompiler.Compile(Card).Check(data)`, which by default allows additional properties. Un-modelled fields aren't caught by `Check` — only by the manual `Object.keys(data).filter(k => !known.has(k))` diff at the top level. That diff doesn't recurse into `set`, `variants_detailed[]`, `attacks[]`, etc.

**What to do:** either (a) mark every schema `Type.Object(..., { additionalProperties: false })` and re-run — will surface every extra field with a clean error path, or (b) write a recursive walker that compares response keys against the schema tree. Option (a) is cleaner but noisier during development; option (b) is more forgiving and gives per-node reports.

**Blocks:** honest "no drift" claims. Currently the RFC says validate-live is "clean" — that's true at the top level only. Nested drift is invisible.

### 1.3 Fixture coverage across categories, pricing states, sets, series

**Current state:** `validate-live.ts` fetches exactly one card (`base1-4`, Charizard, Base Set, Pokemon category, English). One card is not evidence — it's a smoke test.

**What to do:** build a fixture set covering:
- Every `category`: Pokemon, Trainer, Energy
- Pricing states: cards with both providers, cardmarket-only, tcgplayer-only, no pricing at all, `null` pricing
- Diverse sets: modern (SV era), classic (Base/Jungle), promo, digital-only
- Diverse series: at least one card from each `Serie`
- Each `SupportedLanguage` (at least a sample)
- Edge shapes: cards with `variants_detailed`, cards without; cards with `boosters`, cards without; Trainer subtypes

Run all fixtures through validate + strict nested check in CI. This turns "the schema works" from an assertion into a claim backed by evidence.

**Blocks:** RFC's "the demo proves the drift is closed" argument. Currently proves it for one card.

---

## 2. RFC wording corrections

### 2.1 "Single source of truth" is aspirational until Stage 4

**Current state:** the RFC repeatedly calls the schema the "single source of truth" for output types. Today, and throughout Stages 1–3, the server still imports its output types from `@tcgdex/sdk`. The schema is a *proposed* SoT — the actual SoT is still the SDK until Stage 4 lands.

**What to do:** audit every use of "source of truth" / "SoT" in the RFC and qualify it. Suggested rewordings:
- Before Stage 4: "**intended** source of truth", "SoT candidate", "future SoT"
- The Solution section can say "will become the source of truth after Stage 4"
- The staging plan can say Stage 4 is "SoT realised"

The current wording is confusing because a reader assumes SoT status the moment they read "Solution: `@tcgdex/schema`", but it's not true yet at the code level.

### 2.2 Claims around `implements` and optional fields

**Current state:** the RFC says `implements CardShape` "makes drift a compile error — if the schema adds a field and the class doesn't declare it, `tsc` fails." That's overstated. TypeScript's `implements` check is structural on *required* members. Optional fields on the interface don't force the class to declare them. Extra fields on the class don't fail the check either.

**What to do:** correct the claim to describe what `implements` actually catches:
- Required fields on the interface must be declared with a compatible type on the class — **yes, drift-catching**
- Optional fields on the interface can be missing on the class — **not caught, silent gap**
- Fields on the class that aren't on the interface — **allowed, class can extend**
- Type narrowing (e.g. `category: 'Pokemon' | ...` on interface, `category: string` on class) — **caught**

Mitigation for the optional-field gap: pair `implements` with a linter rule or a codegen step that emits stub properties for every optional interface field. Or accept the gap and document that optional fields are best-effort.

### 2.3 Tighter SDK types are *source-breaking*, not "backwards-compatible"

**Current state:** Stage 2 of the staging plan claims "**Non-breaking** — tighter types are backwards-compatible." That's wrong.

Narrowing `category: string` → `category: 'Pokemon' | 'Trainer' | 'Energy'` breaks consumer code like:

```ts
if (card.category === 'unknown') { ... }   // TS error after tightening
const map: Record<string, SomeHandler> = { ... }
map[card.category]?.(card)                  // still works but subtler shifts if map keys change
```

Runtime behaviour is unchanged, but consumer TS code that compiled before may not compile after. That's a **source-breaking change** — not runtime-breaking, but breaking nonetheless.

**What to do:** reword Stage 2 to say:

> Tightening open enums to closed unions is **source-breaking** for consumers who type-check against the wider `string` type (e.g. comparing to unknown literal values or using it as a `Record<string, T>` key). Runtime behaviour is unchanged. Ships behind a schema major-version bump so consumers can opt in.

Options to soften the transition:
- Ship type tightening in the schema's own major bump (`1.0.0` → `2.0.0`), not in a patch
- Provide a `@tcgdex/schema/loose` export that keeps enums as `string` for consumers who need time to migrate
- Document specific known-broken patterns in a migration guide

### 2.4 OpenAPI/docs guarantees around manually maintained paths

**Current state:** the RFC's Documentation site section implies the docs become drift-free. But path definitions in `emit-openapi.ts` are **still hand-authored** — routes, parameters, `operationId`s, response codes. If the server adds a route and the emit script isn't updated, docs and reality drift again. The claim covers `components/schemas` well; it overstates coverage for paths.

**What to do:** rewrite the "What stops drifting" table to distinguish:
- **Component schemas (auto):** field types, enum values, error shapes, request/response bodies — genuinely drift-free
- **Path definitions (manual):** endpoint URLs, method, parameters, status codes — still hand-authored, can drift

Add a follow-up bullet to Stage 2:
> Path definitions in `emit-openapi.ts` are currently hand-authored. Automating them would require introspection of the server's Express router — deferred to Stage 2b or later. Until then, adding a route in the server means updating `emit-openapi.ts` too.

Also tone down "auto-generated reference" to "auto-generated schema reference; path reference is still maintained alongside the router."

---

## 3. Design refinements

### 3.1 Keep wire DTOs separate from idiomatic SDK model shapes

**Current state:** the RFC proposes JS SDK classes `implements CardShape` directly from the schema. But the schema is authored in **wire format** — snake_case `variants_detailed`, optional-vs-nullable ambiguity, no computed properties. Idiomatic JS SDK shapes are camelCase (`variantsDetailed`), have computed accessors (`getImageURL()`, `getCard()`), and may narrow or reshape fields for ergonomics.

Forcing `implements CardShape` on JS SDK classes either (a) drags wire-format naming into JS SDK consumer code, or (b) breaks the `implements` check when the class uses idiomatic naming.

**What to do:** treat the schema as **wire DTOs** and let SDKs define their own idiomatic **model shapes** on top:

```
@tcgdex/schema (wire DTOs — snake_case, faithful to HTTP response)
        ↓ importable, but not implemented
@tcgdex/sdk (idiomatic model classes — camelCase, methods, accessors)
        ↑ fill() translates wire → model at deserialization
```

The SDK's `fill()` already does the `variants_detailed` → `variantsDetailed` remap. Formalise that: wire and model are two shapes, connected by an explicit adapter. `implements CardShape` doesn't apply to model classes; instead the SDK's *DTO layer* imports `CardShape` for its fetch/validation boundary, and the *model layer* is a separate translation.

Non-JS SDKs face the same choice per language convention.

Update the RFC's JS SDK Integration section accordingly. The current "just add `implements`" pitch is too glib.

### 3.2 Share enum arrays with the input definitions immediately

**Current state:** `schema/src/enums.ts` copies the enum lists (`RARITIES`, `STAGES`, `SUFFIXES`, `POKEMON_TYPES`, etc.) verbatim from `interfaces.d.ts`. Two lists, one truth in name only. If someone adds a rarity to `interfaces.d.ts` and forgets the schema, drift starts on day one.

**What to do:** don't wait for Alternative B / a later stage — extract the enum arrays into a shared location that both `interfaces.d.ts` and the schema import. Options:

- New file `interfaces/enums.ts` at the cards-database root, exporting the arrays as `const`. Both `interfaces.d.ts` (for input types) and `schema/src/enums.ts` (for output schemas) import from it.
- Or put the arrays in `schema/src/enums.ts` and have `interfaces.d.ts` import them (schema becomes the enum SoT).

Either way, the duplication ends immediately, not "eventually." This is a one-hour fix and it moots the entire enum-drift risk that the RFC spends multiple paragraphs framing.

Bump the "shared enum hybrid" mention in Considered Alternatives from "compatible follow-up" to "adopted in the POC."

### 3.3 Query contract — implement or defer

**Current state:** the RFC's "Query authoring" section promises typed filter DX:

> `filter('rarity', 'Rare')` type-checks; `filter('rarity', 'super-rare')` errors before the request fires

But there's **no query contract in the schema**. Filter/sort/pagination params are in the OpenAPI as query parameters (`pagination:page`, `sort:field`, etc.), but the *filter grammar* (which fields are filterable, what operators are supported, how nested paths encode) is not modelled. The DX claim can't be delivered by anything in this PR.

**What to do:** pick one:
- **(a) Implement a real query contract.** Add a `QuerySchema` that enumerates filterable fields per resource, valid operators per field type, and the wire encoding. Expose it as a runtime constant and a type. This is a real design task — probably a follow-up RFC.
- **(b) Move the query-authoring promises to future work.** Rewrite the section to say "the OpenAPI document describes the query parameter surface at the parameter-name level; a richer typed query contract is a future addition." Remove the `filter('rarity', 'Rare')` example — it's aspirational, not shipped.

Recommendation: (b) for this RFC, then (a) as a follow-up RFC once the schema lands. The query contract deserves its own design conversation and shouldn't be smuggled in as a downstream benefit of this PR.

---

## Handling in the RFC

The corrections in sections 2 and 3 should land as edits to `RFC.md` before the PR is treated as final. The code gaps in section 1 are POC-level — either fix in this PR or link to this document from the RFC as "known limitations of the demo, tracked here."

Suggested minimum for a "final" RFC:
- Reword all "single source of truth" claims (2.1)
- Correct the `implements` characterisation (2.2)
- Reword Stage 2 as source-breaking (2.3)
- Split component-drift vs path-drift in the docs section (2.4)
- Add the wire DTO / model shape separation (3.1) — probably as a subsection under JS SDK Integration
- Fix the enum duplication in the POC and cite it as done (3.2)
- Move or implement the query contract (3.3)

The remaining POC gaps (1.1–1.3) are honest to leave as "follow-ups tracked in `docus/implementation-followups.md`" — the demo doesn't have to be production-grade to make the case.
