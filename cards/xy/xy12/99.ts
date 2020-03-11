import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-99",
	localId: 99,

	// Card informations
	name: {
		en: "Basic Fairy Energy",
		fr: "Énergie Fairy de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
