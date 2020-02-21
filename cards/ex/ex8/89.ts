import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-89",
	localId: 89,

	// Card informations
	name: {
		en: "Meteor Falls",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/89/high",
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
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
