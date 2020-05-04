import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-28",
	localId: 28,

	// Card informations
	name: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 27,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
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
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
