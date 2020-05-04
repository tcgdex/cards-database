import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-9",
	localId: 9,

	// Card informations
	name: {
		en: "Delta Species Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
