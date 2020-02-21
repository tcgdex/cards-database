import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Timburr",
		fr: "Charpenti",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 532,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/59/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
