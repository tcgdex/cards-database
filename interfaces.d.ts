export type SupportedLanguages =
	// inter languages
	| 'en' // English					en-US
	| 'fr' // French					fr-FR
	| 'es' // Spanish					es-ES
	| 'es-mx' // Latin America Spanish	es-MX
	| 'it' // Italian					it-IT
	| 'pt' // a merge of `pt-br` & `pt-pt`
	| 'pt-br' // Brazilian Portuguese	pt-BR
	| 'pt-pt' // Portugal Portuguese	pt-PT
	| 'de' // German					de-DE
	| 'nl' // Dutch						nl-NL
	| 'pl' // Polish					pl-PL
	| 'ru' // Russian					ru-RU

	// Asian languages
	| 'ja' // Japanese					ja-JP
	| 'ko' // korean					ko-KO
	| 'zh-tw' // Traditionnal Chinese	zh-TW
	| 'id' // Indonesian				id-ID
	| 'th' // Thai						th-TH
	| 'zh-cn' // Simplified Chinese		zh-CN

/**
 * The list of Pokémon types
 */
export type Types =
	| 'Grass'
	| 'Fire'
	| 'Water'
	| 'Lightning'
	| 'Psychic'
	| 'Fighting'
	| 'Darkness'
	| 'Metal'
	| 'Dragon'
	| 'Fairy'
	| 'Colorless'

export type Rarity =
	| 'ACE SPEC Rare'
	| 'Amazing Rare'
	| 'Classic Collection'
	| 'Common'

	| 'Double rare'
	| 'Full Art Trainer'
	| 'Holo Rare'
	| 'Holo Rare V'

	| 'Holo Rare VMAX'
	| 'Holo Rare VSTAR'
	| 'Hyper rare'
	| 'Illustration rare'

	| 'LEGEND'
	| 'None'
	| 'Radiant Rare'
	| 'Rare'
	| 'Rare Holo'
	| 'Rare Holo LV.X'

	| 'Rare PRIME'
	| 'Secret Rare'
	| 'Shiny Ultra Rare'
	| 'Shiny rare'
	| 'Shiny rare V'

	| 'Shiny rare VMAX'
	| 'Special illustration rare'
	| 'Ultra Rare'
	| 'Uncommon'

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
 * utility to help in multi language strings
 */
export type Languages<T = string> = Partial<Record<SupportedLanguages, T>>

/**
 * Helper to define an ISO date
 */
type ISODate = `${number}-${number}-${number}`

/**
 * Definition of a serie
 */
export interface Serie {
	id: string
	name: Languages

	/**
	 * Serie Energy cards
	 */
	energies?: Array<Types>
}


export interface Set {
	id: string
	name: Languages
	/**
	 * Partial list of abbreviations, this is currently a Work in Progress feature
	 */
	abbreviations?: Partial<Omit<Languages, 'en'> & { official?: string }>
	serie: Serie
	tcgOnline?: string

	cardCount: {
		official: number
	}

	boosters?: Record<string, {
		name: Languages<string>
	}>

	releaseDate: ISODate | Languages<ISODate>
}

type VariantShortcut =
	| 'normal' // = { type: 'normal' }
	| 'foil'
	| 'reverse'

type VariantDefinition = {
	/**
	 * if not set it is `normal`
	 */
	type?: 'normal' | 'holo' | 'reverse'
	size?:
	| 'jumbo'
	| 'standard'
	stamp?: '1st edition' | 'w-promo' | 'pre-release'
} & ({
	type: 'holo'
	foil?: string
} | {
	type: 'reverse'
	foil?: 'pokeball' | 'hyperball'
})

type Variant = VariantShortcut | VariantDefinition

/**
* base interface with everything in common between cards
*/
interface BaseCard {
	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	name: Languages
	subtitle?: Languages

	/**
	 * the card number
	 */
	number?: string

	/**
	 * Card illustrator
	 */
	illustrator?: string

	copyright?: {
		text: Language
		year?: number
	}

	/**
	 * indicate in which boosters the card is available
	 */
	boosters?: Array<string>

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
	rarity?: Rarity

	/**
	 * Card Variants
	 */
	variants?: Array<Variant>

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
	 * indicate the pokémons that are present on the card graphic
	 */
	pokemons?: Array<string | {
		name: string
		isShiny?: boolean
	}>
}


export interface PokemonCard extends BaseCard {
	category: 'Pokemon'

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
	stage?: 'Basic' | 'BREAK' | 'LEVEL-UP' | 'MEGA' | 'RESTORED' | 'Stage1' | 'Stage2' | 'VMAX' | 'V-UNION' | 'Baby' | 'VSTAR'

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
	 * Pokemon HP
	 */
	hp?: number

	/**
	 * Pokemon Types
	 */
	types?: Array<Types> // ex for multiple https://www.tcgdex.net/database/ex/ex13/17

	/**
	 * Pokemon Pokedex ID
	 */
	dexId?: Array<number>

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
	 * The Pokémon Weakness
	 *
	 * Old cards don't have text with their weakness, but the rules indicate that it does `x2`
	 */
	weakness?: {
		/**
		 * the list of types the pokemon is weak to
		*/
		types: Array<Types>
		/**
		 * the full line text of the weakness (exlucding types)
		*/
		text?: string
	}

	resistance?: {
		types: Array<Types>
		text: string
	}

	/**
	* The retreat count of the card
	*/
	retreat?: number
}

export interface TrainerCard extends BaseCard {
	category: 'Trainer'
	effect?: Languages

	/**
	 * Pokemon HP
	 */
	hp?: number

	// Trainer Only
	trainerType?: 'Supporter' // https://www.tcgdex.net/database/ex/ex7/83
	| 'Item' // https://www.tcgdex.net/database/ex/ex7/89
	| 'Stadium' // https://www.tcgdex.net/database/ex/ex7/87
	| 'Tool' // https://www.tcgdex.net/database/neo/neo1/93
	| 'Ace Spec' // https://www.tcgdex.net/database/bw/bw7/139
	| 'Technical Machine' // https://www.tcgdex.net/database/ecard/ecard1/144
	| 'Goldenrod Game Corner' // https://www.tcgdex.net/database/neo/neo1/83
	| 'Rocket\'s Secret Machine' // https://www.tcgdex.net/database/ex/ex7/84

}

export interface EnergyCard extends BaseCard {
	category: 'Energy'
	effect?: Languages

	// Energy Only
	energyType?: 'Normal' // https://www.tcgdex.net/database/ecard/ecard1/160
	| 'Special' // https://www.tcgdex.net/database/ecard/ecard1/158
}

export type Card = PokemonCard | TrainerCard | EnergyCard
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
