import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Panpour",
		fr: "Flotajou",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 515,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
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
