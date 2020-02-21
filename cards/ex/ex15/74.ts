import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-74",
	localId: 74,

	// Card informations
	name: {
		en: "Holon Legacy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
