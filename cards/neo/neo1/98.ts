import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Super Scoop Up",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/98/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
