import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
