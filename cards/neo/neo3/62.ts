import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Ken Sugimori",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
