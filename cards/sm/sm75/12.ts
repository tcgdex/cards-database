import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-12",
	localId: 12,

	// Card informations
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 725,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/12/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/12/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryota Murayama",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
