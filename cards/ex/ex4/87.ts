import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Magma Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/87/high",
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











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
