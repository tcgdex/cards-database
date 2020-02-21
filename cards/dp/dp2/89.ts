import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Magikarp",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Magikarp.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dragon Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
