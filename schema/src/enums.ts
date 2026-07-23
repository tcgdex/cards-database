import { Type, type SchemaOptions } from '@sinclair/typebox'

/** Closed: a fixed set. Emits a real union — the .d.ts gains precision the SDK lacks. */
export function ClosedEnum<T extends readonly string[]>(values: T, options?: SchemaOptions) {
  return Type.Union(values.map((v) => Type.Literal(v)) as never, options)
}

/** Open: grows over time. Validates as any string (new values never throw);
 *  known values ride along as x-extensible-enum metadata for docs + codegen. */
export function OpenEnum<T extends readonly string[]>(values: T, options?: SchemaOptions) {
  return Type.String({ ...options, 'x-extensible-enum': values as unknown as string[] })
}

// --- value lists, lifted verbatim from cards-database/interfaces.d.ts ---

export const LANGUAGES = [
  'en', 'fr', 'es', 'es-mx', 'it', 'pt', 'pt-br', 'pt-pt', 'de', 'nl', 'pl', 'ru',
  'ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn',
] as const
export type SupportedLanguages = (typeof LANGUAGES)[number]

export const RARITIES = [
  'ACE SPEC Rare', 'Amazing Rare', 'Classic Collection', 'Common', 'Double rare',
  'Full Art Trainer', 'Holo Rare', 'Holo Rare V', 'Holo Rare VMAX', 'Holo Rare VSTAR',
  'Hyper rare', 'Illustration rare', 'LEGEND', 'None', 'Radiant Rare', 'Rare', 'Rare Holo',
  'Rare Holo LV.X', 'Rare PRIME', 'Secret Rare', 'Shiny Ultra Rare', 'Shiny rare',
  'Shiny rare V', 'Shiny rare VMAX', 'Special illustration rare', 'Ultra Rare', 'Uncommon',
  'Black White Rare', 'Mega Hyper Rare',
  'One Diamond', 'Two Diamond', 'Three Diamond', 'Four Diamond',
  'One Star', 'Two Star', 'Three Star', 'Crown', 'One Shiny', 'Two Shiny', 'Promo',
] as const // 40 values

export const POKEMON_TYPES = [
  'Colorless', 'Darkness', 'Dragon', 'Fairy', 'Fighting', 'Fire',
  'Grass', 'Lightning', 'Metal', 'Psychic', 'Water',
] as const

export const CATEGORIES = ['Pokemon', 'Trainer', 'Energy'] as const
export const STAGES = ['Basic', 'BREAK', 'LEVEL-UP', 'MEGA', 'RESTORED', 'Stage1', 'Stage2', 'VMAX', 'V-UNION', 'Baby', 'VSTAR'] as const
export const SUFFIXES = ['EX', 'GX', 'V', 'Legend', 'Prime', 'SP', 'TAG TEAM-GX', 'ex'] as const
export const TRAINER_TYPES = ['Supporter', 'Item', 'Stadium', 'Tool', 'Ace Spec', 'Technical Machine', 'Goldenrod Game Corner', "Rocket's Secret Machine"] as const
export const ENERGY_TYPES = ['Normal', 'Special'] as const
export const ABILITY_TYPES = ['Pokemon Power', 'Poke-BODY', 'Poke-POWER', 'Ability', 'Ancient Trait'] as const

// --- the schemas. open vs closed per the RFC's ruling table ---

export const Rarity = OpenEnum(RARITIES)        // OPEN  → headline: SDK types this as bare `string`
export const Category = ClosedEnum(CATEGORIES)  // CLOSED → becomes a union in the .d.ts
export const PokemonType = ClosedEnum(POKEMON_TYPES)
export const EnergyType = ClosedEnum(ENERGY_TYPES)
export const AbilityType = ClosedEnum(ABILITY_TYPES)
export const Stage = OpenEnum(STAGES)
export const Suffix = OpenEnum(SUFFIXES)
export const TrainerType = ClosedEnum(TRAINER_TYPES)

// --- variant_detailed enums (served by live API, never typed by SDK) ---
export const VARIANT_TYPES = ['normal', 'reverse', 'holo', 'firstEdition'] as const
export const VariantType = ClosedEnum(VARIANT_TYPES)