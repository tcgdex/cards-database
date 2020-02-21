import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 501,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
