import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-78",
	localId: 78,

	// Card informations
	name: {
		en: "Goop Gas Attack",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/78/high",
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
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
