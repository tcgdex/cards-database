import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-47",
	localId: 47,

	// Card informations
	name: {
		en: "Ekans δ",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/47/high",
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
			en: "Bite",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Tail Snap",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
