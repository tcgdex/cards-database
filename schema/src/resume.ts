import { Type, type Static } from '@sinclair/typebox'

export const Variants = Type.Object({
  normal: Type.Optional(Type.Boolean()),
  reverse: Type.Optional(Type.Boolean()),
  holo: Type.Optional(Type.Boolean()),
  firstEdition: Type.Optional(Type.Boolean()),
})
export type Variants = Static<typeof Variants>

export const CardResume = Type.Object({
  id: Type.String(),
  localId: Type.String(),
  name: Type.String(),
  image: Type.Optional(Type.String()),
})
export type CardResume = Static<typeof CardResume>

export const SetResume = Type.Object({
  id: Type.String(),
  name: Type.String(),
  logo: Type.Optional(Type.String()),
  symbol: Type.Optional(Type.String()),
  cardCount: Type.Object({ total: Type.Number(), official: Type.Number() }),
})
export type SetResume = Static<typeof SetResume>

export const SerieResume = Type.Object({
  id: Type.String(),
  name: Type.String(),
  logo: Type.Optional(Type.String()),
})
export type SerieResume = Static<typeof SerieResume>