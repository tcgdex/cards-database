import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-61",
	localId: 61,

	// Card informations
	name: {
		en: "Seedot",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Drawup Power",
		},
		text: {
			en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Continuous Tumble",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
