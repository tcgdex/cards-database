import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-98",
	localId: 98,

	// Card informations
	name: {
		en: "δ Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/98/high",
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
