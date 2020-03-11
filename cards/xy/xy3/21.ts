import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 613,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/21/high",
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
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
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
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
