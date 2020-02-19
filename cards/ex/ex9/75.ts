import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-75",
	localId: 75,

	// Card informations
	name: {
		en: "Battle Frontier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card

