import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-102",
	localId: 102,

	// Card informations
	name: {
		en: "Ultra Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
