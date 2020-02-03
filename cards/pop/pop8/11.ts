import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-11",
	localId: 11,

	// Card informations
	name: {
		en: "Roseanne's Research",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/11/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card

