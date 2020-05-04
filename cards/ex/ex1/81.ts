import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Energy Restore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hideyuki Nakajima",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
