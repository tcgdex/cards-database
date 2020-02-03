import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-229",
	localId: 229,

	// Card informations
	name: {
		en: "Beast Bringer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/229/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/229/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

