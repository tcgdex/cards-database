import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-89",
	localId: 89,

	// Card informations
	name: {
		en: "Island Cave",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 193,
		name: "Ken Ikugi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
