import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Pokémon Breeder",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/76/high",
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
		name: "Base",
		code: "base1"
	}
}

export default card
