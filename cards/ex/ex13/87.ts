import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-87",
	localId: 87,

	// Card informations
	name: {
		en: "Holon Lake",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
