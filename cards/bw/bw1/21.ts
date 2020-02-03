import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Pansear",
		fr: "Flamajou",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 513,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/21/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/21/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/21/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
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
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
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

