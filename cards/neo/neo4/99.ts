import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-99",
	localId: 99,

	// Card informations
	name: {
		en: "Energy Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/99/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 158,
		name: "Hideki Kazama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
