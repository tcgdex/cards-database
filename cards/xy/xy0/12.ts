import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-12",
	localId: 12,

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
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
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
