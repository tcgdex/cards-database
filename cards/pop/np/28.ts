import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-28",
	localId: 28,

	// Card informations
	name: {
		en: "Championship Arena",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
