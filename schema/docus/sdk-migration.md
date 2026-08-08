# Migrating @tcgdex/sdk onto @tcgdex/schema

The JS SDK is two layers: **data shapes** (interfaces describing what the API
returns) and **runtime model classes** (behavior — `getImageURL()`, `getCard()`,
`Endpoint`, `TCGdex`, `Model.fill()`). `@tcgdex/schema` replaces layer 1. Layer 2
stays untouched, and its class properties become checked against the schema
instead of hand-declared in isolation.

The migration is **non-breaking for SDK consumers** — types get tighter (closed
enums become real unions), never looser.

---

## 1. Add `@tcgdex/schema` as a devDependency

```json
{
  "devDependencies": {
    "@tcgdex/schema": "^1.0.0"
  }
}
```

Types-only — the schema types are erased at compile time. Zero bytes added to
the SDK's published bundle. No runtime dependency unless you opt into runtime
validation (see [§4](#4-optional-runtime-validation)).

---

## 2. Add `implements` to each model class

The SDK's model classes (`Card`, `Set`, `Serie`, `CardResume`, `SetResume`,
`SerieResume`) each declare their properties by hand and extend a `Model` base
that copies API response properties onto `this` via `fill()`. Keep that
architecture — just add `implements` so the class's properties are checked
against the schema's contract.

**Before** — `src/models/Card.ts` hand-defines the shape (which drifts from what
the server actually returns):

```ts
import CardResume from './CardResume'
import type { Variants, VariantsDetailed } from './Other'

export default class Card extends CardResume {
  public rarity!: string          // schema knows this is Rarity (open) with 40 known values
  public category!: string        // schema knows this is "Pokemon" | "Trainer" | "Energy" (closed union)
  public types?: Array<string>    // schema knows this is Array<PokemonType> (closed union)
  public stage?: string
  public suffix?: string
  public variants?: Variants
  public variantsDetailed?: Array<VariantsDetailed>
  // …
  // Missing entirely: `pricing` and `updated` — served by the API, never typed
}
```

**After** — add `implements Card` from `@tcgdex/schema`:

```ts
import type { Card as CardShape } from '@tcgdex/schema'
import CardResume from './CardResume'

export default class Card extends CardResume implements CardShape {
  public rarity!: string
  public category!: 'Pokemon' | 'Trainer' | 'Energy'   // tightened by the implements check
  public types?: Array<'Colorless' | 'Darkness' | 'Dragon' | 'Fairy' | 'Fighting' | 'Fire' | 'Grass' | 'Lightning' | 'Metal' | 'Psychic' | 'Water'>
  public stage?: string
  public suffix?: string
  public variants?: CardShape['variants']
  public variants_detailed?: CardShape['variants_detailed']   // schema's wire-format field (see §3)
  public pricing?: CardShape['pricing']                       // NEW — previously a ghost property
  public updated?: string                                     // NEW — previously a ghost property
  // …
}
```

Once `implements CardShape` is in place, any future schema change that isn't
mirrored on the class causes `tsc` to fail. Drift becomes a compile error.

The generated `dist/types.d.ts` in this POC package is your reference for what
the closed-enum unions look like.

---

## 3. Handle the wire-format vs. camelCase naming

The API returns `variants_detailed` (snake_case). The SDK's current `Card` class
presents `variantsDetailed` (camelCase) and rewrites the key in a `fill()`
override:

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

The schema is authoritative for the **wire format** — it uses
`variants_detailed` because that's what the API sends and what validators check
against. Two options for the SDK:

**Option A (recommended for this iteration): match the wire format.**
Rename the class property `variantsDetailed` → `variants_detailed`, remove the
`fill()` remap. Simpler; no divergence between the class shape and the schema.

**Option B: keep the camelCase convention, defer a mapped type.**
Keep `variantsDetailed` on the class, drop `implements CardShape` on this one
field, and add a follow-up to `@tcgdex/schema` to export a
`CamelCard` mapped type. Then `implements CamelCard` restores full checking.

Option A is a one-line breaking change on one field name. Option B preserves
JS-idiom naming at the cost of a schema utility type. Team call.

---

## 4. Optional: runtime validation

If you want to catch server-side regressions where the API starts returning
something the schema doesn't allow, validate at the fetch boundary:

```ts
import { CardSchema } from '@tcgdex/schema'
import { TypeCompiler } from '@sinclair/typebox/compiler'

const CardValidator = TypeCompiler.Compile(CardSchema)

// in the fetch path (once per SDK init, then reused):
const data = await res.json()
if (!CardValidator.Check(data)) {
  const errors = [...CardValidator.Errors(data)]
  throw new Error(`API response does not match Card schema: ${errors[0].message}`)
}
```

This is opt-in. Adding it introduces a small runtime dependency on
`@sinclair/typebox` (~30KB minified). Skip if you want to keep the SDK bundle
lean; add it later if drift becomes a support-load issue.

---

## 5. What doesn't change

- The `Model` base class, `fill()`, `Endpoint`, `TCGdex`, `getImageURL()`, all
  fetch logic — untouched
- Every public method on the SDK models — untouched
- The published SDK API surface — unchanged (types get tighter but no new
  imports required)
- The class hierarchy (`Card extends CardResume`, etc.) — unchanged

Consumers of `@tcgdex/sdk` see one thing on upgrade: cleaner autocomplete on
enum fields. Every existing use site keeps working.
