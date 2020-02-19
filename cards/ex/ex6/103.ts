import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-103",
	localId: 103,

	// Card informations
	name: {
		en: "Multi Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 175,
		name: "Tokumi Akabane"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card

