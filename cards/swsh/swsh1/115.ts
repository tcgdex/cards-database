import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Stonjourner V",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/115/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],





	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Guard Press",
		},
		text: {
			en: "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mega Kick",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

