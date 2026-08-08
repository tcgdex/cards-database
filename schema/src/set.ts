import { Type, type Static } from '@sinclair/typebox'
import { SetResume, SerieResume, CardResume, Variants } from './resume.js'

const Legal = Type.Object({ standard: Type.Boolean(), expanded: Type.Boolean() })

// Standalone (not Composite) because Set redefines cardCount richer than SetResume —
// composing would collide the key. Explicit is clearer for a demo anyway.
export const Set = Type.Object({
  id: Type.String(),
  name: Type.String(),
  logo: Type.Optional(Type.String()),
  symbol: Type.Optional(Type.String()),
  serie: SerieResume,
  tcgOnline: Type.Optional(Type.String()),
  variants: Type.Optional(Variants),
  releaseDate: Type.String(),
  legal: Legal,
  cardCount: Type.Object({
    total: Type.Number(), official: Type.Number(),
    normal: Type.Number(), reverse: Type.Number(), holo: Type.Number(),
    firstEd: Type.Optional(Type.Number()),
  }),
  cards: Type.Array(CardResume),
})
export type Set = Static<typeof Set>

export const Serie = Type.Object({
  id: Type.String(),
  name: Type.String(),
  logo: Type.Optional(Type.String()),
  sets: Type.Array(SetResume),
})
export type Serie = Static<typeof Serie>