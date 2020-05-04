import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mr. Briney's Compassion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
