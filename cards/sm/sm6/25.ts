import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-25",
	localId: 25,

	// Card informations
	name: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 692,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
