import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-162",
	localId: 162,

	// Card informations
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psychic de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/162/high",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
