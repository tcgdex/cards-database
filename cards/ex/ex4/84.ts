import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-84",
	localId: 84,

	// Card informations
	name: {
		en: "Team Magma's Technical Machine 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Mitsuhiro Arita",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
