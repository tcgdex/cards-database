import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-11",
	localId: 11,

	// Card informations
	name: {
		en: "Roseanne's Research",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/11/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Kanako Eo",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
