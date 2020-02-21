import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-31",
	localId: 31,

	// Card informations
	name: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 582,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/31/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/31/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
