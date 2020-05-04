import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-168",
	localId: 168,

	// Card informations
	name: {
		en: "Lightning Energy",
		fr: "Énergie Lightning de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
