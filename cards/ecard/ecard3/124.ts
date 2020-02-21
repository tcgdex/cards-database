import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-124",
	localId: 124,

	// Card informations
	name: {
		en: "Fast Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/124/high",
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
