import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-91",
	localId: 91,

	// Card informations
	name: {
		en: "Space Center",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/91/high.png",
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

