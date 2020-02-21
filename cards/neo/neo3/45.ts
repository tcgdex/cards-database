import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Goldeen",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 118,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/45/high",
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
			en: "Fin Smack",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
