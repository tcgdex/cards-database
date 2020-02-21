import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-85",
	localId: 85,

	// Card informations
	name: {
		en: "Holon Energy GL",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
