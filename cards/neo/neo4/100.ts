import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Lucky Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 151,
		name: "Imakuni?"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

