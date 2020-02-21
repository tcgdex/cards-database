import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-25",
	localId: 25,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 139,
		name: "Hiroki Asanuma"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
