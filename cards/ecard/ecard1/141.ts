import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-141",
	localId: 141,

	// Card informations
	name: {
		en: "Energy Restore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/141/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 125,
		name: "Hideyuki Nakajima"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
