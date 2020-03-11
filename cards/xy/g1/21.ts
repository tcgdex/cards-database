import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 98,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
