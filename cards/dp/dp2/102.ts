import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-102",
	localId: 102,

	// Card informations
	name: {
		en: "Spheal",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 363,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Hustle",
		},
		text: {
			en: "Flip a coin. If heads, during your next turn, Spheal's Rollout attack's base damage is 40.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
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
