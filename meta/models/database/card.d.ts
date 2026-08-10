import type { ISODate, LanguageSpecific, SupportedLanguages, TCGType } from '../globals'
import type { Set } from './set'

export interface Card {
	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	name:
		| LanguageSpecific<string>
		/**
		 * if the name is composed of multiple parts, decompose the name here
		 */
		| {
			prefix?: LanguageSpecific<string>
			main: LanguageSpecific<string>
			suffix?: LanguageSpecific<string>
		}

	/**
	 * Card illustrator
	 */
	illustrators?: {
		text: string
		list: Array<string> | string
	}

	/**
	 * TCG Pocket exclusive.
	 * indicate in which boosters the card is available
	 */
	boosters?: Array<string>

	/**
	 * Indicate on which platform the card has release
	 *
	 * note: if `platforms` is not set, it will be set to `physical-tcg` has the most common
	 */
	platforms?: Array<'physical-tcg' | 'tcgp' | 'tcgl' | 'tcgo'>

	/**
	 * optionnal override of the set release date
	 */
	releaseDate?: ISODate

	/**
	 * Card Rarity
	 *
	 * notes:
	 *
	 * - Currently in the work to be coherent with the official card lists
	 * - the rarities Shiny rare V and Shiny rare VMAX are one rarity in the official but separated in the API
	 *
	 * Examples (link should be up to date):
	 * - ACE SPEC Rare: https://www.tcgdex.net/database/Scarlet-&-Violet/Temporal-Forces/141-pokemon
	 * - Amazing Rare: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/17-Reshiram
	 * - Classic Collection: https://www.tcgdex.net/database/Sword-&-Shield/Celebrations/2A-Blastoise
	 * - Common: https://www.tcgdex.net/database/xy/xy9/1
	 * - Double rare: https://www.tcgdex.net/database/Scarlet-&-Violet/151/003-Venusaur-ex
	 * - Full Art Trainer: https://www.tcgdex.net/database/Sword-&-Shield/Silver-Tempest/TG01-Braixen
	 * - Holo Rare: https://www.tcgdex.net/database/Sword-&-Shield/Astral-Radiance/014-Shaymin
	 * - Holo Rare V: https://www.tcgdex.net/database/Sword-&-Shield/Darkness-Ablaze/1-Butterfree-V
	 * - Holo Rare VMAX: https://www.tcgdex.net/database/Sword-&-Shield/Darkness-Ablaze/2-Butterfree-VMAX
	 * - Holo Rare VSTAR: https://www.tcgdex.net/database/Sword-&-Shield/Astral-Radiance/018-Hisuian-Lilligant-VSTAR
	 * - Hyper rare: https://www.tcgdex.net/database/Scarlet-&-Violet/151/205-Mew-ex
	 * - Illustration rare: https://www.tcgdex.net/database/Scarlet-&-Violet/151/166-Bulbasaur
	 * - LEGEND: https://www.tcgdex.net/database/HeartGold-&-SoulSilver/HeartGold-SoulSilver/111-HoOh-LEGEND
	 * - None: https://www.tcgdex.net/database/sm/smp/SM01
	 * - Radiant Rare: https://www.tcgdex.net/database/Sword-&-Shield/Silver-Tempest/016-Radiant-Tsareena
	 * - Rare: https://www.tcgdex.net/database/xy/xy9/3
	 * - Rare Holo: https://www.tcgdex.net/database/Platinum/Platinum/1-Ampharos
	 * - Rare Holo LV.X: https://www.tcgdex.net/database/Platinum/Platinum/122-Dialga-G
	 * - Rare PRIME: https://www.tcgdex.net/database/HeartGold-&-SoulSilver/HeartGold-SoulSilver/105-Ampharos
	 * - Secret Rare: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/73-Alcremie-VMAX
	 * - Shiny rare: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/SV001-Rowlet
	 * - Shiny Ultra Rare: https://www.tcgdex.net/database/Scarlet-&-Violet/Paldean-Fates/213-Toedscruel-ex
	 * - Shiny rare V: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/SV105-Rillaboom-V
	 * - Shiny rare VMAX: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/SV106-Rillaboom-VMAX
	 * - Special illustration rare: https://www.tcgdex.net/database/Scarlet-&-Violet/151/198-Venusaur-ex
	 * - Ultra Rare: https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/18-Cinderace-V
	 * - Uncommon: https://www.tcgdex.net/database/Sword-&-Shield/Darkness-Ablaze/136-Furret
	 */
	rarity: CardRarity

	/**
	 * Card Category
	 *
	 * - Pokemon
	 * - Trainer
	 * - Energy
	 */
	category: CardCategory

	/**
	 * Card Variants
	 */
	variants?: CardVariants

	/**
	 * Card Set
	 */
	set: Set

	/**
	 * Card regulation Mark
	 *
	 * note: added from Sword & Shield
	 */
	regulationMark?: string

	/**
	 * Pokemon only elements
	 */

	/**
	 * The Pokémon Pokédex ID that is displayed on the card
	 */
	dexId?: number

	/**
	 * The pokédex IDs of every pokémon shown on the card
	 *
	 * WARNING: to be counted, the pokémon must be clearly visible with it's original/shiny colors
	 */
	pokemonShown?: Array<number>

	/**
	 * Pokemon HP
	 */
	hp?: number

	/**
	 * Pokemon TCGType
	 */
	TCGType?: Array<TCGType> // ex for multiple https://www.tcgdex.net/database/ex/ex13/17

	/**
	 * Pokemon Sub Evolution
	 *
	 * recommended to use the dex number for better mapping
	 */
	evolveFrom?: LanguageSpecific<string> | number

	/**
	 * Pokemon Weight in kg
	 */
	weight?: string

	/**
	 * Pokemon Description
	 */
	description?: LanguageSpecific<string>

	/**
	 * Level of the Pokemon
	 *
	 * NOTE: can be equal to 'X' when the pokemon is a LEVEL-UP one
	 */
	level?: number | 'X'

	/**
	 * Pokemon Stage
	 *
	 * - Basic https://www.tcgdex.net/database/xy/xy9/1
	 * - BREAK https://www.tcgdex.net/database/xy/xy9/18
	 * - LEVEL-UP https://www.tcgdex.net/database/dp/dp1/121
	 * - MEGA https://www.tcgdex.net/database/xy/xy1/2
	 * - RESTORED https://www.tcgdex.net/database/bw/bw5/53
	 * - Stage1 https://www.tcgdex.net/database/xy/xy9/2
	 * - Stage2 https://www.tcgdex.net/database/xy/xy9/3
	 * - VMAX https://www.tcgdex.net/database/swsh/swsh1/50
	 * - Baby https://www.tcgdex.net/database/swsh/cel25/20A
	 * - VSTAR https://www.tcgdex.net/database/swsh/swsh9/14
	 */
	stage?: PokemonStage

	/**
	 * Pokemon Held Item
	 *
	 * ex https://www.tcgdex.net/database/dp/dp2/75
	 */
	item?: {
		name: LanguageSpecific<string>
		effect: LanguageSpecific<string>
	}

	/**
	 * Pokemon Abilities
	 *
	 * multi abilities ex https://www.tcgdex.net/database/ex/ex15/10
	 */
	abilities?: Array<{
		type: 'Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait'
		name: LanguageSpecific<string>
		effect: LanguageSpecific<string>
	}>

	/**
	 * Pokemon Attacks
	 */
	attacks?: Array<{
		cost?: Array<TCGType>
		name: LanguageSpecific<string>
		effect?: LanguageSpecific<string>
		damage?: string | number
	}>

	/**
	 * Pokemon Weaknesses
	 */
	weaknesses?: Array<{
		type: TCGType
		value?: string
	}>

	resistances?: Array<{
		type: TCGType
		value?: string
	}>

	/**
	 * the number of colorless cards that is necessary to have the pokemon retreat
	 */
	retreat?: number

	/**
	 * The Trainer / Special Energy effect text
	 */
	effect?: LanguageSpecific<string>

	subtype?:
	// trainer sub types
	| 'Supporter' // https://www.tcgdex.net/database/ex/ex7/83
	| 'Item' // https://www.tcgdex.net/database/ex/ex7/89
	| 'Stadium' // https://www.tcgdex.net/database/ex/ex7/87
	| 'Tool' // https://www.tcgdex.net/database/neo/neo1/93
	| 'Ace Spec' // https://www.tcgdex.net/database/bw/bw7/139
	| 'Technical Machine' // https://www.tcgdex.net/database/ecard/ecard1/144
	| 'Goldenrod Game Corner' // https://www.tcgdex.net/database/neo/neo1/83
	| 'Rocket\'s Secret Machine' // https://www.tcgdex.net/database/ex/ex7/84

	// Energy sub types
	| 'Normal' // https://www.tcgdex.net/database/ecard/ecard1/160
	| 'Special' // https://www.tcgdex.net/database/ecard/ecard1/158

	/**
	 * Card copyright override. When present, overrides the copyright defined by the set.
	 */
	copyright?: {
		text: string
		year: number
	}

	/**
	 * TODO: find a better name
	 */
	graphicalDescription?: {
		/**
		 * artwork style of the card
		 */
		artwork?: VariantArtwork

		/**
		 * background style of the card
		 */
		background?: VariantBackground
	}
}

/**!
 * Sub objects are defined below
 */


export type VariantType = 'normal' | 'holo' | 'reverse' | 'metal' | 'lenticular'
export type VariantStamps = '1st-edition' | 'w-promo' | 'pre-release' | 'pokemon-center' | 'set-logo' | 'staff' | 'pikachu-tail'
	| 'wotc' | 'd-edition-error' | '1st-edition-scratch-error' | "1st-edition-error" | '1st-movie' | '1st-movie-inverted'
	| 'pokemon-4-ever' | 'pokemon-center-ny' | "winner" | '25th-celebration' | 'chris-fulop' | 'tsuguyoshi-yamato'
	| 'reed-weichler' | 'kevin-nguyen' | 'professor-program' | 'takashi-yoneda' | 'michael-gonzalez' | 'curran-hill'
	| 'jeremy-maron' | 'jimmy-ballard' | 'miska-saari' | 'hiroki-yano' | 'jason-klaczynski' | 'state-championships'
	| 'national-championships' | 'gym-challenge' | 'city-championships' | 'jeremy-scharff-kim' | 'destiny-deoxys'
	| 'pokemon-day' | 'regional-championships' | 'international-championships' | 'stadium-challenge' | '10th-anniversary' | 'wizard-world-philadelphia'
	| 'wizard-world-chicago' | 'comic-con' | 'nintendo-world' | 'gen-con' | 'akira-miyazaki' | 'tom-roos'
	| 'pokemon-rocks-america' | 'jun-hasebe' | 'origins' | 'games-expo' | 'kraze-club' | 'dylan-lefavour'
	| 'tristan-robinson' | 'paul-atanassov' | 'david-cohen' | 'tsubasa-nakamura' | 'worlds-2004' | 'worlds-2005' | 'worlds-2007' | 'finalist'
	| 'quarter-finalist' | 'semi-finalist' | 'top-sixteen' | 'top-thirty-two' | 'worlds-2008' | 'worlds-2009'
	| 'countdown-calendar' | 'michael-pramawat' | 'distributor-meeting' | 'mychael-bryan' | "stephen-silvestro"
	| 'yuka-furusawa' | 'jason-martinez' | 'yuta-komatsuda' | 'origins-2008' | 'platinum' | 'worlds-2010'
	| 'ross-cawthorn' | 'gustavo-wada' | 'christopher-kan' | 'player-rewards-program' | 'igor-costa'
	| 'zachary-bokhari' | 'shuto-itagaki' | 'snowflake' | 'trick-or-trade' | 'horizons' | 'gamestop' | 'eb-games'
	| 'illustration-contest-2022' | 'illustration-contest-2024' | 'worlds-2025' | 'top-eight' | "champion" | "poke-ball-league" | "master-ball-league" | "ultra-ball-league" | "judge" | "asia-promo"
	| "international-championship-europe" | "international-championship-latin-america" | "international-championship-north-america" | 'ace-trainer'
	| 'pikachu' | 'bulbasaur' | 'squirtle' | 'charmander' | 'pokeball' | '30th-pokeday' | 'mcdonalds' | 'pokemon-together' | 'rain-city' | 'tournament-collection'
	| 'worlds-2024' | 'worlds-2023' | 'asia-2023-24' | 'thank-you' | 'jr-stamp-rally' | 'grey-star' | 'pop-tournament' | 'chase-moloney' | 'chicago-2009' | 'scrye' | 'inquest-gamer'
	| 'jesse-parker' | 'gabriel-fernandez' | 'sakuya-ota' | 'shao-tong-yen'

/**
 * Foil axis of a variant
 * - normal: no holographic elements
 * - holo: the illustration has a foil
 * - reverse: everything but the illustration is foiled
 */
export type VariantFoil = 'normal' | 'holo' | 'reverse'

/**
 * Foil pattern used on holo & reverse variants.
 * Also covers the former metal & lenticular TCGType and the glossy finish.
 */
export type VariantPattern = 'pokeball' | 'greatball' | 'ultraball' | 'masterball' | 'cosmos' | 'galaxy' | 'starlight' | 'energy' | 'cracked-ice'
	| 'mirror' | 'league' | 'player-reward' | 'professor-program' | 'tinsel' | 'loveball' | 'friendball' | 'quickball' | 'team-rocket' | 'duskball' | 'glitter'
	| 'lenticular' | 'metal' | 'glossy'

/**
 * Print state of a card, mostly relevant for the older sets
 * (Base Set shadowless/unlimited, copyright variants, misprints, ...)
 */
export type VariantPrint = 'shadowless' | 'unlimited' | '1999-2000-copyright' | 'missing-expansion-symbol' | 'gold-border'
	| 'missing-hp' | 'aoki-error' | '1999-copyright' | 'evolution-box-error' | 'no-holo-error' | 'd-ink-dot-error'
	| 'energy-symbol-error' | 'text-error' | 'shifted-energy-cost' | 'japanese-back' | 'no-e-reader' | 'rarity-error'
	| 'blue-border' | 'shadowless-red-cheek' | '2019-copyright' | '2020-copyright' | 'nintedo-error'
	| '1995-1998-copyright' | 'no-rarity' | 'missing-retreat-cost' | 'phanphy-error' | 'peelable-ditto'

/**
 * Release line of a variant
 * - main: the main line of the set
 * - parallel: a parallel print of the same card
 * - restricted: a print only available in a restricted way
 * - exclusive: an exclusive print (event/staff participation rewards)
 */
export type VariantLine = 'main' | 'parallel' | 'restricted' | 'exclusive'

/**
 * Where a card was distributed, or the event it comes from.
 * Values also listed here are printed stamps that carry an origin meaning
 * (ex: pre-release, pokemon-center, professor-program, player-rewards-program).
 */
export type VariantOrigin = 'japan-post' | 'pokemon-center' | 'pre-release' | 'ebay-cosmos'
	| 'gamestop' | 'eb-games' | 'mcdonalds' | 'comic-con' | 'gen-con' | 'origins' | 'origins-2008' | 'games-expo' | 'nintendo-world' | 'pokemon-day'
	| 'horizons' | 'kraze-club' | 'wizard-world-philadelphia' | 'wizard-world-chicago'
	| 'player-rewards-program' | 'professor-program' | 'asia-promo' | 'asia-2023-24'
	| 'winner' | 'finalist' | 'quarter-finalist' | 'semi-finalist' | 'top-eight' | 'top-sixteen' | 'top-thirty-two'
	| 'judge' | 'gym-challenge' | 'stadium-challenge' | 'city-championships' | 'regional-championships' | 'national-championships' | 'state-championships' | 'international-championships'
	| 'worlds-2004' | 'worlds-2005' | 'worlds-2007' | 'worlds-2008' | 'worlds-2009' | 'worlds-2010' | 'worlds-2023' | 'worlds-2024' | 'worlds-2025'
	| 'international-championship-europe' | 'international-championship-latin-america' | 'international-championship-north-america'

/**
 * Artwork style of a variant
 * - full-art: the artwork covers the whole card
 * - alt-art: alternative artwork, also known as alt art or special art
 */
export type VariantArtwork = 'full-art' | 'alt-art'

/**
 * Card background style
 * - gold: the card has a gold background
 * - rainbow: the card has a rainbow background
 */
export type VariantBackground = 'gold' | 'rainbow'


export type CardVariants = Array<{

	// the serial code linked to the variant
	serialCode?: string

	/**
	 * define the size of the card
	 * - standard: the classic size of a card
	 * - jumbo: also said oversized, big card.
	 */
	size?: 'standard' | 'jumbo' // note: maybe add the different sizes differences added thourhg hte age

	/**
	 * the type of foil of the card
	 * validate usability because it might be detectable through the pattern
	 */
	foil?: 'reverse' | 'holo'

	/**
	 * **new in v3** foil pattern of the variant.
	 * Takes precedence over the legacy `foil` field.
	 */
	pattern?: VariantPattern

	/**
	 * whether the variant has an etched/textured foil layer
	 */
	etched?: boolean // note: maybe it is a list, at least check if different types of etching

	/**
	 * print state of the variant.
	 */
	print?: VariantPrint

	/**
	 * printed stamps of the variant.
	 */
	stamps?: Array<VariantStamps>

	/**
	 * **new in v3** where the variant was distributed / which event it comes from
	 */
	origin?: VariantOrigin

	/**
	 * **new in v3** release line of the variant
	 */
	line?: VariantLine

	/**
	 * list of languages for which this variant is available
	 * if not set, the variant is available in all languages
	 */
	languages?: SupportedLanguages[]

	thirdParty?: {
		tcgplayer?: number
		cardmarket?: number
		cardtrader?: number
	}
}>


export type CardCategory = 'Pokemon' | 'Trainer' | 'Energy'

export type CardRarity = // todo reference each with a picture
	| 'ACE SPEC Rare'
	| 'Amazing Rare'
	| 'Classic Collection'
	| 'Common'
	| 'Double Rare'
	| 'Full Art Trainer'
	| 'Holo Rare'
	| 'Holo Rare V'
	| 'Holo Rare VMAX'
	| 'Holo Rare VSTAR'
	| 'Hyper Rare'
	| 'Illustration Rare'
	| 'LEGEND'
	| 'None'
	| 'Radiant Rare'
	| 'Rare'
	| 'Rare Holo'
	| 'Rare Holo LV.X'
	| 'Rare PRIME'
	| 'Secret Rare'
	| 'Shiny Ultra Rare'
	| 'Shiny Rare'
	| 'Shiny Rare V'
	| 'Shiny Rare VMAX'
	| 'Special Illustration Rare'
	| 'Ultra Rare'
	| 'Uncommon'
	| 'Black White Rare'
	| 'Mega Hyper Rare'

	// Pokémon TCG Pocket Rarities
	| 'One Diamond'
	| 'Two Diamond'
	| 'Three Diamond'
	| 'Four Diamond'
	| 'One Star'
	| 'Two Star'
	| 'Three Star'
	| 'Crown'
	| 'One Shiny'
	| 'Two Shiny'


/**
 * Pokemon Stage
 *
 * - Basic https://www.tcgdex.net/database/xy/xy9/1
 * - BREAK https://www.tcgdex.net/database/xy/xy9/18
 * - LEVEL-UP https://www.tcgdex.net/database/dp/dp1/121
 * - MEGA https://www.tcgdex.net/database/xy/xy1/2
 * - RESTORED https://www.tcgdex.net/database/bw/bw5/53
 * - Stage1 https://www.tcgdex.net/database/xy/xy9/2
 * - Stage2 https://www.tcgdex.net/database/xy/xy9/3
 * - VMAX https://www.tcgdex.net/database/swsh/swsh1/50
 * - Baby https://www.tcgdex.net/database/swsh/cel25/20A
 * - VSTAR https://www.tcgdex.net/database/swsh/swsh9/14
 */
export type PokemonStage =
	| 'Basic'
	| 'BREAK'
	| 'LEVEL-UP'
	| 'MEGA'
	| 'RESTORED'
	| 'Stage1'
	| 'Stage2'
	| 'VMAX'
	| 'V-UNION'
	| 'Baby'
	| 'VSTAR'
