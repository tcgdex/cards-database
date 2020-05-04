import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Cheerleader's Cheer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kouki Saitou",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
