import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/95/high",
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
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
