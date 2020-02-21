import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Impostor Professor Oak's Invention",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/94/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
