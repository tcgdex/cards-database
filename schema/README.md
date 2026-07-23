# @tcgdex/schema — demo

Runnable proof for the schema-driven-types RFC, modeled on the **current V2** output
shape so it can be checked against live data and the existing `@tcgdex/sdk` types.
The real package will define V3's output contract using the same pipeline.

> **Not for merge as-is.** This POC mirrors V2 to prove the pipeline end-to-end.
> See [`RFC.md`](./RFC.md) for the full proposal and staging plan.

## Run

    npm install
    npm run demo      # emit:dts + emit:openapi + validate:live

Expected output:

    → dist/types.d.ts
    ✓ wrote dist/openapi.json
      33 paths, 9 schemas
    ✓ live base1-4 validates against Card

## What to look at

1. **`dist/types.d.ts`** — clean TypeScript declarations generated from the schema.
   Closed enums (`category`, `types`, `energyType`, `abilityType`) become real unions
   like `"Pokemon" | "Trainer" | "Energy"`. Open enums (`rarity`, `stage`, `suffix`)
   stay `string` — new values from future set releases won't break consumers.
   Compare with the current `@tcgdex/sdk` `.d.ts` where every enum is bare `string`.

2. **`dist/openapi.json`** — full OpenAPI 3.1 document: 33 paths, 9 component schemas,
   RFC 9457 `application/problem+json` error responses, `x-extensible-enum` metadata
   on every open enum. Feed this straight into `openapi-generator-cli` for non-JS SDKs.
   Compare with the hand-maintained `server/public/v2/openapi.yaml` (1705 lines).

3. **`npm run validate:live`** — fetches `base1-4` (Charizard, Base Set) from
   `api.tcgdex.net` and validates it against the schema. On the current run, it
   passes clean with no un-modeled fields — `variants_detailed`, `pricing`, and
   `updated` (all ghost properties on the current SDK type) are now modeled.

## Sample generated SDK output

To prove the OpenAPI pipeline is real, not aspirational:

```powershell
npx @openapitools/openapi-generator-cli generate -i dist/openapi.json -g python -o dist/generated-python-sample --additional-properties=packageName=tcgdex
```

Requires Java (the generator is a JVM tool). Produces a full Python client with
Pydantic models — see `dist/generated-python-sample/tcgdex/models/card.py`. The
pipeline works end-to-end; the follow-up work described in the RFC is a Mustache
template override to convert `x-extensible-enum` metadata into real Python enums
with an `UNKNOWN` fallback for open-enum semantics.

## Docs

- [`RFC.md`](./RFC.md) — the full RFC (problem, solution, staging, FAQ)
- [`docus/sdk-migration.md`](./docus/sdk-migration.md) — how the JS SDK adopts the schema (`implements` pattern)
- [`docus/workflows/`](./docus/workflows/) — example GitHub Actions showing how schema releases would auto-regenerate downstream SDKs
- [`docus/python-template-sketch.mustache`](./docus/python-template-sketch.mustache) — a sketch of the `x-extensible-enum` Mustache override (needs archaeology against the actual openapi-generator Python defaults before it will run)

## Notes / production deltas

- **Sub-schemas are inlined** in the generated OpenAPI (no `$ref`s between component
  schemas). Reviewers will see auto-named inline schemas like `Card_variants_detailed_inner`
  in the Python sample — cosmetic, not correctness. Production adds a `$ref`-lifting
  pass so `Card.set` becomes `{$ref: '#/components/schemas/SetResume'}`. Stage 2b work.
- **Path operations lack `operationId`** — the generator invents names like `cardsGet`
  from the path. Production sets explicit `operationId` per op so the generated client
  methods read cleanly (`client.list_cards()` vs `client.cards_get()`). Stage 2b work.
- **Package is `private: true`** and versioned `0.0.0-demo` — the real package publishes
  to npm as `@tcgdex/schema` starting at `1.0.0`.
