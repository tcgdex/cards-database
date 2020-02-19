import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-81",
	localId: 81,

	// Card informations
	name: {
		en: "Strength Charm",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/81/high.png",
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
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card

