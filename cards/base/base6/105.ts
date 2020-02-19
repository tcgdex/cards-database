import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-105",
	localId: 105,

	// Card informations
	name: {
		en: "The Boss's Way",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/105/high.png",
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
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card

