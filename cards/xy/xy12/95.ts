import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-95",
	localId: 95,

	// Card informations
	name: {
		en: "Basic Psychic Energy",
		fr: "Énergie Psychic de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/95/high",
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
