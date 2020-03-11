import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-167",
	localId: 167,

	// Card informations
	name: {
		en: "Fire Energy",
		fr: "Énergie Fire de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/167/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/167/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/167/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/167/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
