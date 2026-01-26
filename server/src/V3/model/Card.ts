import CardResume from './CardResume'
import type { Booster, Variants } from './Other'
import type tcgdexSet from './Set'

// TODO: sort elements by alphabetical order
export default class Card extends CardResume {
	/**
	 * Card illustrator
	 */
	public illustrator?: string

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
	public rarity!: string

	/**
	 * Card Category
	 *
	 * - Pokemon
	 * - Trainer
	 * - Energy
	 */
	public category!: string

	/**
	 * Card Variants (Override Set Variants)
	 */
	public variants?: Variants

	/**
	 * Card Set
	 */
	public set!: tcgdexSet

	/**
	 * Pokemon only elements
	 */

	/**
	 * Pokemon Pokedex ID
	 */
	public dexId?: Array<number>

	/**
	 * Pokemon HP
	 */
	public hp?: number

	/**
	 * Pokemon Types
	 * ex for multiple https://www.tcgdex.net/database/ex/ex13/17
	 */
	public types?: Array<string>

	/**
	 * Pokemon Sub Evolution
	 */
	public evolveFrom?: string

	/**
	 * Pokemon Weight
	 */
	public weight?: string

	/**
	 * Pokemon Description
	 */
	public description?: string

	/**
	 * Level of the Pokemon
	 *
	 * NOTE: can be equal to 'X' when the pokemon is a LEVEL-UP one
	 */
	public level?: number | string

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
	public stage?: string

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
	public suffix?: string

	/**
	 * Pokemon Held Item
	 *
	 * ex https://www.tcgdex.net/database/dp/dp2/75
	 */
	public item?: {
		name: string
		effect: string
	}

	/**
	 * Pokemon Abilities
	 *
	 * multi abilities ex https://www.tcgdex.net/database/ex/ex15/10
	 */
	public abilities?: Array<{
		type: string
		name: string
		effect: string
	}>

	/**
	 * Pokemon Attacks
	 */
	public attacks?: Array<{
		cost?: Array<string>
		name: string
		effect?: string
		damage?: string | number
	}>

	/**
	 * Pokemon Weaknesses
	 */
	public weaknesses?: Array<{
		type: string
		value?: string
	}>

	public resistances?: Array<{
		type: string
		value?: string
	}>

	public retreat?: number

	// Trainer/Energy
	public effect?: string

	// Trainer Only
	public trainerType?: string

	// Energy Only
	public energyType?: string

	/**
	 * Define the rotation mark on cards >= Sword & Shield
	 */
	public regulationMark?: string

	/**
	 * Card ability to be played in official tournaments
	 *
	 * Note: all cards are avaialable to play in unlimited tournaments
	 */
	public legal!: {

		/**
		 * Ability to play in standard tournaments
		 */
		standard: boolean

		/**
		 * Ability to play in expanded tournaments
		 */
		expanded: boolean
	}

	public boosters?: Array<Booster>
}
