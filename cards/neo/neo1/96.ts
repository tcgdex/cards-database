import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Professor Elm",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/96/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
