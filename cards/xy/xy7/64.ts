import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-64",
	localId: 64,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Data Check",
			fr: "Vérification de Données",
		},
		text: {
			en: "Look through your deck. Shuffle your deck afterward.",
			fr: "Parcourez votre deck. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
