import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-9",
	localId: 9,

	// Card informations
	name: {
		en: "Night Maintenance",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/9/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ryo Ueda",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
