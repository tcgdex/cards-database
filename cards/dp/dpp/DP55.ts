import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Yusuke Ishikawa",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
