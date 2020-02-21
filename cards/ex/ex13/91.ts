import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-91",
	localId: 91,

	// Card informations
	name: {
		en: "Claw Fossil",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
