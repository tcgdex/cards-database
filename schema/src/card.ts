import { Type, type Static } from '@sinclair/typebox'
import { CardResume, SetResume, Variants } from './resume.js'
import { Rarity, Category, PokemonType, Stage, Suffix, TrainerType, EnergyType, AbilityType, VariantType } from './enums.js'

const Legal = Type.Object({ standard: Type.Boolean(), expanded: Type.Boolean() })

const PricingSource = Type.Optional(Type.Object({
  url: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String()),
  prices: Type.Optional(Type.Record(Type.String(), Type.Number())),
}))

const Pricing = Type.Optional(Type.Object({
  cardmarket: PricingSource,
  tcgplayer: PricingSource,
}))

const VariantDetailed = Type.Object({
  type: VariantType,
  pricing: Pricing,
})

// Card = CardResume + the full card fields — mirrors the SDK's `Card extends CardResume`.
export const Card = Type.Composite([
  CardResume,
  Type.Object({
    illustrator: Type.Optional(Type.String()),
    rarity: Rarity,
    category: Category,
    variants: Type.Optional(Variants),
    variants_detailed: Type.Optional(Type.Array(VariantDetailed)),
    set: SetResume,
    dexId: Type.Optional(Type.Array(Type.Number())),
    hp: Type.Optional(Type.Number()),
    types: Type.Optional(Type.Array(PokemonType)),
    evolveFrom: Type.Optional(Type.String()),
    weight: Type.Optional(Type.String()),
    description: Type.Optional(Type.String()),
    level: Type.Optional(Type.Union([Type.Number(), Type.String()])),
    stage: Type.Optional(Stage),
    suffix: Type.Optional(Suffix),
    item: Type.Optional(Type.Object({ name: Type.String(), effect: Type.String() })),
    abilities: Type.Optional(Type.Array(Type.Object({
      type: AbilityType, name: Type.String(), effect: Type.String(),
    }))),
    attacks: Type.Optional(Type.Array(Type.Object({
      cost: Type.Optional(Type.Array(PokemonType)),
      name: Type.String(),
      effect: Type.Optional(Type.String()),
      damage: Type.Optional(Type.Union([Type.String(), Type.Number()])),
    }))),
    weaknesses: Type.Optional(Type.Array(Type.Object({ type: PokemonType, value: Type.Optional(Type.String()) }))),
    resistances: Type.Optional(Type.Array(Type.Object({ type: PokemonType, value: Type.Optional(Type.String()) }))),
    retreat: Type.Optional(Type.Number()),
    effect: Type.Optional(Type.String()),
    trainerType: Type.Optional(TrainerType),
    energyType: Type.Optional(EnergyType),
    regulationMark: Type.Optional(Type.String()),
    legal: Legal,
    pricing: Pricing,
    updated: Type.Optional(Type.String()),
  }),
])

type _Card = Static<typeof Card>
export type Card<S extends SetResume = SetResume> = Omit<_Card, 'set'> & { set: S }