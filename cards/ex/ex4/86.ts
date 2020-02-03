import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-86",
	localId: 86,

	// Card informations
	name: {
		en: "Aqua Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/86/high.png",
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

