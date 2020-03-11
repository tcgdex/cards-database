import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP25",
	localId: "DP25",

	// Card informations
	name: {
		en: "Tropical Wind",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP25/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Sumiyoshi Kizuki",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
