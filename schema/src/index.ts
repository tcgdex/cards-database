/**
 * @tcgdex/schema — public surface.
 *
 * DATA TYPES + SCHEMAS live here (the single source of truth for the output shape).
 * The RUNTIME CLIENT — model classes, Endpoint, TCGdex, getImageURL(), fill() — stays
 * in @tcgdex/sdk. This package provides shapes and runtime validators, not behavior.
 */

import type { CardResume, SetResume, SerieResume } from './resume.js'

// ── Data types: what the JS SDK imports instead of hand-defining ──────────────
export type { Card } from './card.js'                 // generic: Card<S extends SetResume>
export type { Set, Serie } from './set.js'
export type { CardResume, SetResume, SerieResume, Variants } from './resume.js'

export type CardList = CardResume[]
export type SetList = SetResume[]
export type SerieList = SerieResume[]
export interface StringEndpoint { name: string; cards: CardList }

// ── Runtime schemas: validation + codegen input ──────────────────────────────
export { Card as CardSchema } from './card.js'
export { Set as SetSchema, Serie as SerieSchema } from './set.js'
export {
  CardResume as CardResumeSchema, SetResume as SetResumeSchema,
  SerieResume as SerieResumeSchema, Variants as VariantsSchema,
} from './resume.js'

// ── Enum values as runtime constants + the request-language list ──────────────
export * as Enums from './enums.js'
export { LANGUAGES, type SupportedLanguages } from './enums.js'