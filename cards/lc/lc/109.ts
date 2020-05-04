import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-109",
	localId: 109,

	// Card informations
	name: {
		en: "Mysterious Fossil",
	},

	hp: 10,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/109/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
