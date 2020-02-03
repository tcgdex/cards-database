import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Thought Wave Machine (Rocket's Secret Machine)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

