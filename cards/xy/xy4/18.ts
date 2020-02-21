import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Finneon",
		fr: "Écayon",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 456,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/18/high",
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
			Type.WATER
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
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
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
