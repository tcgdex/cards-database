import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP55",
	localId: "DP55",

	// Card informations
	name: {
		en: "Ultimate Zone",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
