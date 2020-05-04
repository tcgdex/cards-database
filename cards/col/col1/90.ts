import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/90/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/90/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/90/high",
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
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
