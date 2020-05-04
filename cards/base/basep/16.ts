import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "basep-16",
	localId: 16,

	// Card informations
	name: {
		en: "Computer Error",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/16/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Sumiyoshi Kizuki",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
