import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP54",
	localId: "DP54",

	// Card informations
	name: {
		en: "Beginning Door",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP54/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card

