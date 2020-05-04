import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-4",
	localId: 4,

	// Card informations
	name: {
		en: "Double Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
