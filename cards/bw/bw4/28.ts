import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Panpour",
		fr: "Flotajou",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 515,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/28/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/28/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 107,
		name: "Reiko Tanoue"
	},



	attacks: [{
		cost: [
			Type.WATER,
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
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
