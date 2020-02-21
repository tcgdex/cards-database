import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-74",
	localId: 74,

	// Card informations
	name: {
		en: "Cessation Crystal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
