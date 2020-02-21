import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-102",
	localId: 102,

	// Card informations
	name: {
		en: "Pokémon Personality Test",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/102/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
