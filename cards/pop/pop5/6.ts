import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-6",
	localId: 6,

	// Card informations
	name: {
		en: "Bill's Maintenance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/6/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
