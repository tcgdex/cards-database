export type SupportedLanguages =
	// inter languages
	'en' | 'fr' | 'es' | 'es-mx' | 'it' | 'pt' | 'pt-br' | 'pt-pt' | 'de' | 'nl' | 'pl' | 'ru' |
	// Asian languages
	'ja' | 'ko' | 'zh-tw' | 'id' | 'th' | 'zh-cn'

export type Languages<T = string> = Partial<Record<SupportedLanguages, T>>

export type LanguagesV2<Langs = SupportedLanguages, T = string> = Record<Langs, T>

export interface Serie {
	id: string
	name: Languages

	/**
	 * Serie Energy cards
	 */
	energies?: Array<Types>
}

export type VariantType =  'normal' | 'holo' | 'reverse' | 'metal' | 'lenticular'
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
 * Also covers the former metal & lenticular types and the glossy finish.
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

export type Variants = Array<variant_detailed>

export type Category = 'Pokemon' | 'Trainer' | 'Energy'

export interface variant_detailed {
	/**
	 * define the variant type
	 * - normal: no holographic elements
	 * - holo: the illustration has a foil
	 * - reverse: everything but the illustration is foiled
	 *
	 * **deprecated in v3** metal & lenticular are moved to the `pattern` field
	 */
	type: VariantType

	/**
	 * Some older sets had specific subtypes for the cards
	 * i.e Base Set had shadowless with and without a 1st-edition stamp.
	 * and the Unlimited version of the set had no shadow.
	 *
	 * **deprecated in v3** the print states are moved to the `print` field,
	 * the cosmos & glossy finishes are moved to the `pattern` field.
	 */
	subtype?: 'shadowless' | 'unlimited' | '1999-2000-copyright' | 'missing-expansion-symbol' | 'gold-border'
	| 'missing-hp' | 'aoki-error' | '1999-copyright' | 'evolution-box-error' | 'no-holo-error' | 'd-ink-dot-error'
	| 'energy-symbol-error' | 'text-error' | 'shifted-energy-cost' | 'japanese-back' | 'no-e-reader' | 'rarity-error'
	| 'cosmos' | 'blue-border' | 'glossy' | 'shadowless-red-cheek' | '2019-copyright' | '2020-copyright' | 'nintedo-error'
	| '1995-1998-copyright' | 'no-rarity' | 'missing-retreat-cost' | 'phanphy-error' | 'peelable-ditto'

	/**
	 * define the size of the card
	 * - standard: the classic size of a card
	 * - jumbo: also said oversized, big card.
	 */
	size?: 'standard' | 'jumbo'

	// TODO: rename to 'stamps' on v4
	/**
	 * indicate that this variant has a stamp
	 * a card may have multiple stamps, example "Ethan's Typhlosion pre-release staff"
	 * this was a pre-release card only given to staff and has both the set-logo and the staff stamp.
	 * - 1st-edition: a 1st-edition card (mostly for the first series of the game)
	 * - w-promo:
	 * - pre-release:
	 * - pokemon-center: a card that is stamped with the Pokémon Center logo
	 * - set-promo: a card that is stamped with the set logo
	 * - staff: a card that is stamped with the staff text
	 * - gamestop: a card that is stamped with the GameStop logo
	 * - eb-games: a card that is stamped with the EB Games logo
	 * - snowflake: a card that is stamped with a snowflake, available in the yearly advent calendar
	 * - trick-or-trade: a card that is stamped with a pikachu-pumpkin, available in the yearly halloween/trick-or-trade boosters
	 * - ace-trainer: a card that is stamped with a golden ACE TRAINER, won by getting 200 championship points in the season since 2025 season.
	 * - player-rewards-program: a card that is stamped with the player reward logo, available in the yearly player rewards program (play! pokemon prize pack)
	 *
	 * **deprecated in v3** use `stamps` instead.
	 */
	stamp?: Array<VariantStamps>
	/**
	 * for the holo & reverse, **optional** indicate which foil is used on the card
	 *
	 * **deprecated in v3** this field is renamed to `pattern`,
	 * the gold & rainbow finishes are moved to the `background` field.
	 */
	foil?: 'pokeball' | 'greatball' | 'ultraball' | 'masterball' | 'gold' | 'cosmos' | 'galaxy' | 'starlight' | 'energy' | 'cracked-ice'
	| 'mirror' | 'league' | 'player-reward' | 'professor-program' | 'tinsel' | 'loveball' | 'friendball' | 'quickball' | 'team-rocket' | 'duskball' | 'rainbow' | 'glitter'

	/**
	 * **new in v3** foil pattern of the variant.
	 * Takes precedence over the legacy `foil` field.
	 */
	pattern?: VariantPattern

	/**
	 * **new in v3** whether the variant has an etched/textured foil layer
	 * (e.g. Tera Pokémon ex, Illustration Rares). Orthogonal to `foil`:
	 * an etched card is typically also `foil: 'holo'`.
	 */
	etched?: boolean

	/**
	 * **new in v3** print state of the variant.
	 * Takes precedence over the legacy `subtype` field.
	 */
	print?: VariantPrint

	/**
	 * **new in v3** printed stamps of the variant.
	 * Takes precedence over the legacy `stamp` field.
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
	 * **new in v3** artwork style of the variant
	 */
	artwork?: VariantArtwork

	/**
	 * **new in v3** background style of the variant
	 */
	background?: VariantBackground

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
}

interface variants {
	/**
	 * Card base version
	 */
	normal?: boolean
	/**
	 * Holo Reverse
	 * (colored Background holographic)
	 */
	reverse?: boolean
	/**
	 * Holo Card
	 * (illustration holographic)
	 */
	holo?: boolean

	/**
	 * can have a first Edition stamp
	 */
	firstEdition?: boolean

	/**
	 * Can be found in Jumob Format
	 */
	jumbo?: boolean

	/**
	 * Card has a pre-release stamp
	 */
	preRelease?: boolean

	/**
	 * Card has a W stamp
	 */
	wPromo?: true
}

export type Types = 'Colorless' | 'Darkness' | 'Dragon' |
	'Fairy' | 'Fighting' | 'Fire' |
	'Grass' | 'Lightning' | 'Metal' |
	'Psychic' | 'Water'

type ISODate = `${number}-${number}-${number}`

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

	/**
	 * Copyright information printed at the bottom of the cards of this set.
	 * Can be overridden on individual cards.
	 */
	copyright?: {
		text: string
		year: number
	}

	thirdParty?: {
		cardmarket?: number
		tcgplayer?: number
	}
}

export interface Card<Langs extends SupportedLanguages = T> {
	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	name: LanguagesV2<Langs>

	/**
	 * Card illustrator
	 */
	illustrator?: string

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
	rarity: 'ACE SPEC Rare' | 'Amazing Rare' | 'Classic Collection' | 'Common' |
	'Double rare' | 'Full Art Trainer' | 'Holo Rare' | 'Holo Rare V' |
	'Holo Rare VMAX' | 'Holo Rare VSTAR' | 'Hyper rare' | 'Illustration rare' |
	'LEGEND' | 'None' | 'Radiant Rare' | 'Rare' | 'Rare Holo' | 'Rare Holo LV.X' |
	'Rare PRIME' | 'Secret Rare' | 'Shiny Ultra Rare' | 'Shiny rare' | 'Shiny rare V' |
	'Shiny rare VMAX' | 'Special illustration rare' | 'Ultra Rare' | 'Uncommon'
	// Black White rare
	| 'Black White Rare'
	| 'Mega Hyper Rare'
	// Pokémon TCG Pocket Rarities
	| 'One Diamond' | 'Two Diamond' | 'Three Diamond' | 'Four Diamond' | 'One Star' | 'Two Star' | 'Three Star' | 'Crown' | 'One Shiny' | 'Two Shiny'

	/**
	 * Card Category
	 *
	 * - Pokemon
	 * - Trainer
	 * - Energy
	 */
	category: Category

	/**
	 * Card Variants (Override Set Variants)
	 *
	 * **deprecated in v3** the boolean map is removed from the API,
	 * the array form becomes the only input.
	 */
	variants?: variants | Variants

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
	evolveFrom?: LanguagesV2<Langs>

	/**
	 * Pokemon Weight
	 */
	weight?: string

	/**
	 * Pokemon Description
	 */
	description?: LanguagesV2<Langs>

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
	 * Pokemon Held Item
	 *
	 * ex https://www.tcgdex.net/database/dp/dp2/75
	 */
	item?: {
		name: LanguagesV2<Langs>
		effect: LanguagesV2<Langs>
	}

	/**
	 * Pokemon Abilities
	 *
	 * multi abilities ex https://www.tcgdex.net/database/ex/ex15/10
	 */
	abilities?: Array<{
		type: 'Pokemon Power' | 'Poke-BODY' | 'Poke-POWER' | 'Ability' | 'Ancient Trait'
		name: LanguagesV2<Langs>
		effect: LanguagesV2<Langs>
	}>

	/**
	 * Pokemon Attacks
	 */
	attacks?: Array<{
		cost?: Array<Types>
		name: LanguagesV2<Langs>
		effect?: LanguagesV2<Langs>
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
	effect?: LanguagesV2<Langs>

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

	/**
	 * Card copyright override. When present, overrides the copyright of the set.
	 */
	copyright?: {
		text: string
		year: number
	}

	thirdParty?: {
		tcgplayer?: number
		cardmarket?: number
	}
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
