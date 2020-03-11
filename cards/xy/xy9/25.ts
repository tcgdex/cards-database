import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Hiroki Asanuma",



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
