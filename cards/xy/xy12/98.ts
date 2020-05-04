import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-98",
	localId: 98,

	// Card informations
	name: {
		en: "Basic Metal Energy",
		fr: "Énergie Metal de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/98/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/98/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/98/high",
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
