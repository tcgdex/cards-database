import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-103",
	localId: 103,

	// Card informations
	name: {
		en: "Pokémon Trader",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/103/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ken Sugimori",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
