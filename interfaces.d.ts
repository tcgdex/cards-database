export type SupportedLanguages = 'en' | 'fr' | 'es' | 'it' | 'pt' | 'de'

export type Languages<T = string> = Partial<Record<SupportedLanguages, T>>

export interface Serie {
	id: string
	name: Languages
}

interface variants {
	normal?: boolean
	reverse?: boolean
	holo?: boolean
	firstEdition?: boolean
}

type Mandatory<T extends {}> = {
	[TK in keyof T]: NonNullable<T[TK]>
}

export type Types = 'Colorless' | 'Darkness' | 'Dragon' |
'Fairy' | 'Fighting' | 'Fire' |
'Grass' | 'Lightning' | 'Metal' |
'Psychic' | 'Water'


export interface Set {
	id: string
	name: Languages
	serie: Serie
	tcgOnline?: string
	variants: Mandatory<variants>

	cardCount: {
		official: number
	}

	releaseDate: string
}

export interface Card {
	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	name: Languages

	/**
	 * Card illustrator
	 */
	illustrator?: string

	/**
	 * Card Rarity
	 *
	 * - None https://www.tcgdex.net/database/sm/smp/SM01
	 * - Common https://www.tcgdex.net/database/xy/xy9/1
	 * - Uncommon https://www.tcgdex.net/database/xy/xy9/2
	 * - Rare https://www.tcgdex.net/database/xy/xy9/3
	 * - Ultra Rare https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/18-Cinderace-V
	 * - Secret Rare https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/73-Alcremie-VMAX
	 * - Amazing https://www.tcgdex.net/database/Sword-&-Shield/Shining-Fates/17-Reshiram
	 */
	rarity: 'None' | 'Common'| 'Uncommon' | 'Rare' | 'Ultra Rare' | 'Secret Rare' | 'Amazing'

	/**
	 * Card Category
	 *
	 * - Pokemon
	 * - Trainer
	 * - Energy
	 */
	category: 'Pokemon' | 'Trainer' | 'Energy'

	/**
	 * Card Variants (Override Set Variants)
	 */
	variants?: variants

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
	 * Pokemon Pokedex ID
	 */
	dexId?: Array<number>

	/**
	 * Pokemon HP
	 */
	hp?: number

	/**
	 * Pokemon Types
	 */
	types?: Array<Types> // ex for multiple https://www.tcgdex.net/database/ex/ex13/17

	/**
	 * Pokemon Sub Evolution
	 */
	evolveFrom?: Languages

	/**
	 * Pokemon Weight
	 */
	weight?: string

	/**
	 * Pokemon Description
	 */
	description?: Languages

	/**
	 * Level of the Pokemon
	 *
	 * NOTE: can be equal to 'X' when the pokemon is a LEVEL-UP one
	 */
	level?: number | string

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
	 */
	stage?: 'Basic' | 'BREAK' | 'LEVEL-UP' | 'MEGA' | 'RESTORED' | 'Stage1' | 'Stage2' | 'VMAX'

	/**
	 * Card Suffix
	 *
	 * - EX https://www.tcgdex.net/database/ex/ex2/94
	 * - GX https://www.tcgdex.net/database/sm/sm12/4
	 * - V https://www.tcgdex.net/database/swsh/swsh1/1
	 * - Legend https://www.tcgdex.net/database/hgss/hgss1/114
	 * - Prime https://www.tcgdex.net/database/hgss/hgss2/85
	 * - SP https://www.tcgdex.net/database/pl/pl1/7
	 * - TAG TEAM-GX https://www.tcgdex.net/database/sm/sm12/226
	 */
	suffix?: 'EX' | 'GX' | 'V' | 'Legend' | 'Prime' | 'SP' | 'TAG TEAM-GX'

	/**
	 * Pokemon Held Item
	 *
	 * ex https://www.tcgdex.net/database/dp/dp2/75
	 */
	item?: {
		name: Languages
		effect: Languages
	}

	/**
	 * Pokemon Abilities
	 *
	 * multi abilities ex https://www.tcgdex.net/database/ex/ex15/10
	 */
	abilities?: Array<{
		type: 'Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait'
		name: Languages
		effect: Languages
	}>

	/**
	 * Pokemon Attacks
	 */
	attacks?: Array<{
		cost?: Array<Types>
		name: Languages
		effect?: Languages
		damage?: string | number
	}>

	/**
	 * Pokemon Weaknesses
	 */
	weaknesses?: Array<{
		type: Types
		value?: string
	}>

	resistances?: Array<{
		type: Types
		value?: string
	}>

	retreat?: number

	//Trainer/Energy
	effect?: Languages

	// Trainer Only
	trainerType?: 'Supporter' | // https://www.tcgdex.net/database/ex/ex7/83
	'Item' | // https://www.tcgdex.net/database/ex/ex7/89
	'Stadium' | // https://www.tcgdex.net/database/ex/ex7/87
	'Tool' | // https://www.tcgdex.net/database/neo/neo1/93
	'Ace Spec' | // https://www.tcgdex.net/database/bw/bw7/139
	'Technical Machine' | // https://www.tcgdex.net/database/ecard/ecard1/144
	'Goldenrod Game Corner' | // https://www.tcgdex.net/database/neo/neo1/83
	'Rocket\'s Secret Machine' // https://www.tcgdex.net/database/ex/ex7/84

	// Energy Only
	energyType?: 'Normal' | // https://www.tcgdex.net/database/ecard/ecard1/160
	'Special' // https://www.tcgdex.net/database/ecard/ecard1/158
}

/**
 * Filter for cards legality
 */
export interface Filter {
	includes: {
		/**
		 * series to be included
		 */
		series: Array<string>
		/**
		 * Set to be included in the filter
		 * ex: swsh1
		 */
		sets: Array<string>
		/**
		 * Filter by regulation Marks on the cards
		 * ex: 'D'
		 */
		regulationMark: Array<string>
	}
	excludes: {
		/**
		 * sets to be excluded
		 */
		sets: Array<string>
		/**
		 * Global Ids of banned cards
		 * ex: swsh1-1
		 */
		cards: Array<string>
	}
}
