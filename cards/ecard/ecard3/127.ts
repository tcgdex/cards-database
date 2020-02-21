import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-127",
	localId: 127,

	// Card informations
	name: {
		en: "Hyper Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/127/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
