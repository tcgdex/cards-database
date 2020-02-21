import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-80",
	localId: 80,

	// Card informations
	name: {
		en: "Memory Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
