import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Counterattack Claws",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/97/high",
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
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
