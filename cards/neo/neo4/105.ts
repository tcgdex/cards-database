import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-105",
	localId: 105,

	// Card informations
	name: {
		en: "Mail from Bill",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/105/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

