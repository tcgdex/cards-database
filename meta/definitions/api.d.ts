/**
 * This file define how the API is architectured for the Compiler and the Javascript/Typescript SDK
 */

/**
* Booster interface
*/
export interface Booster {
	/**
	 * the booster ID
	 *
	 * boo_<set_id>-<booster_name>
	 */
	id: `boo_${string}-${string}`
	/**
	* the name of the booster
	*/
	name: string
	/**
	* the logo of the booster
	*/
	logo?: string
	/**
	* the front of the booster pack
	*/
	artwork_front?: string
	/**
	* the back of the booster pack
	*/
	artwork_back?: string
}

/**
 * /series endpoint
 */
export interface SerieResume {
	id: string;
	name: string;
	logo?: string;
}

/**
 * /series/:id endpoint
 */
export interface Serie extends SerieResume {
	firstSet: SetResume;
	lastSet: SetResume;
	releaseDate: string;
	sets: Array<SetResume>;
}

export interface SetResume {
	id: string;
	name: string;
	logo?: string;
	symbol?: string;
	cardCount: {
		/**
		 * total of number of cards
		 */
		total: number;
		/**
		 * number of cards officialy (on the bottom of each cards)
		 */
		official: number;
	};
}

export interface EventPackResume {
	id: string
	gameId: string
	releaseDate: string
	name: string
	image: string
	cardCount: number
	cardsPerPack: number
}

export interface EventPack extends EventPackResume {
	slots: Array<{ positions: number[]; cardIds: string[] }>
	cards: CardResume[]
}

/**
 * /sets/:id
 */
export interface Set extends SetResume {
	serie: SerieResume;
	tcgOnline?: string;
	releaseDate: string;

	/**
	 * The boosters available in this set
	 */
	boosters?: Array<Booster>
	cardCount: {
		/**
		 * total of number of cards
		 */
		total: number;
		/**
		 * number of cards officialy (on the bottom of each cards)
		 */
		official: number;
	};
	cards: Array<CardResume>;
	abbreviation: { official: string, localized: string };
}
export interface CardResume {
	id: string;
	localId: string;
	/**
	 * Card Name (Including the suffix if next to card name)
	 */
	name: string;
	image?: string;
}

export interface CardCatalogOption {
	value: string;
	label: string;
	count: number;
}

export interface CardCatalogItem extends CardResume {
	set: { id: string; name: string };
	boosters: Array<{ id: string; name: string }>;
	category: { value: string; label: string };
	types: Array<{ value: string; label: string }>;
	rarity?: { value: string; label: string };
	stage?: { value: string; label: string };
	trainerType?: { value: string; label: string };
	suffix?: { value: string; label: string };
	hp?: number;
	retreat?: number;
	illustrator?: string;
	hasAbility: boolean;
}

export interface CardCatalogSearchResponse {
	items: Array<CardCatalogItem>;
	pagination: {
		page: number;
		pageSize: number;
		total: number;
		totalPages: number;
	};
}

export interface CardCatalogSearchOptions {
	total: number;
	sets: Array<CardCatalogOption & { releaseDate?: string }>;
	boosters: Array<CardCatalogOption & { set: { id: string; name: string } }>;
	categories: Array<CardCatalogOption>;
	types: Array<CardCatalogOption>;
	rarities: Array<CardCatalogOption>;
	stages: Array<CardCatalogOption>;
	trainerTypes: Array<CardCatalogOption>;
	suffixes: Array<CardCatalogOption>;
	weaknesses: Array<CardCatalogOption>;
	retreats: Array<CardCatalogOption>;
	attackCostTypes: Array<CardCatalogOption>;
	hasAbility: number;
	ranges: {
		hp: { min: number | null; max: number | null };
		damage: { min: number | null; max: number | null };
	};
}

/**
 * /cards/:id
 * /sets/:set/:localId
 */
export interface Card extends CardResume {
	/**
	 * Card illustrator
	 */
	illustrator?: string;
	/**
	 * Card Rarity
	 *
	 * - None https://www.tcgdex.net/database/sm/smp/SM01
	 * - Common https://www.tcgdex.net/database/xy/xy9/1
	 * - Uncommon https://www.tcgdex.net/database/xy/xy9/2
	 * - Rare https://www.tcgdex.net/database/xy/xy9/3
	 * - Ultra Rare
	 * - Secret Rare
	 */
	rarity: string;
	/**
	 * Card Category
	 *
	 * - Pokemon
	 * - Trainer
	 * - Energy
	 */
	category: string;
	/**
	 * Card Set
	 */
	set: SetResume;
	/**
	 * Pokemon only elements
	 */
	/**
	 * Pokemon Pokedex ID
	 */
	dexId?: Array<number>;
	/**
	 * Pokemon HP
	 */
	hp?: number;
	/**
	 * Pokemon Types
	 * ex for multiple https://www.tcgdex.net/database/ex/ex13/17
	 */
	types?: Array<string>;
	/**
	 * Pokemon Sub Evolution
	 */
	evolveFrom?: string;
	/**
	 * Pokemon Weight
	 */
	weight?: string;
	/**
	 * Pokemon Description
	 */
	description?: string;
	/**
	 * Level of the Pokemon
	 *
	 * NOTE: can be equal to 'X' when the pokemon is a LEVEL-UP one
	 */
	level?: number | string;
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
	stage?: string;
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
	suffix?: string;
	/**
	 * Pokemon Held Item
	 *
	 * ex https://www.tcgdex.net/database/dp/dp2/75
	 */
	item?: {
		name: string;
		effect: string;
	};
	/**
	 * Pokemon Abilities
	 *
	 * multi abilities ex https://www.tcgdex.net/database/ex/ex15/10
	 */
	abilities?: Array<{
		type: string;
		name: string;
		effect: string;
	}>;
	/**
	 * Pokemon Attacks
	 */
	attacks?: Array<{
		cost?: Array<string>;
		name: string;
		effect?: string;
		damage?: string | number;
	}>;
	/**
	 * Pokemon Weaknesses
	 */
	weaknesses?: Array<{
		type: string;
		value?: string;
	}>;
	resistances?: Array<{
		type: string;
		value?: string;
	}>;
	retreat?: number;
	effect?: string;
	trainerType?: string;
	energyType?: string;
	/**
	 * Define the rotation mark on cards >= Sword & Shield
	 */
	regulationMark?: string;
	/**
	 * the boosters in which the card is available
	 */
	boosters?: Array<Booster>

	updated: string
}

/**
 * String Endpoint List
 */
export declare type StringEndpointList = Array<string>;

/**
 * StringEndpoint
 */
export interface StringEndpoint {
	name: string;
	cards: Array<CardResume>;
}
