import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Focus Band",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/86/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
