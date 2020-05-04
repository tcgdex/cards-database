import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-93",
	localId: 93,

	// Card informations
	name: {
		en: "Basic Water Energy",
		fr: "Énergie Water de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
