import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-17",
	localId: 17,

	// Card informations
	name: {
		en: "Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card

