import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-27",
	localId: 27,

	// Card informations
	name: {
		en: "Qwilfish",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 211,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 286,
		type: AbilityType.POKEBODY,
		name: {
			en: "Spiny",
		},
		text: {
			en: "If Qwilfish is your Active Pokémon and is damaged by an opponent's attack (even if Qwilfish is Knocked Out), flip a coin until you get tails. For each heads, put 1 damage counter on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Stun Poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
