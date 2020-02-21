import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Pokémon Breeder Fields",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/62/high",
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
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
