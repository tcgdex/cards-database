import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Pokémon March",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

