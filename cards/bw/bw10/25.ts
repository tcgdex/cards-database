import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-25",
	localId: 25,

	// Card informations
	name: {
		en: "Snover",
		fr: "Blizzi",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/25/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/25/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
