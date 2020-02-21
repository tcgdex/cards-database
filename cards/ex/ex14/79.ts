import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-79",
	localId: 79,

	// Card informations
	name: {
		en: "Holon Circle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/79/high",
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
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
