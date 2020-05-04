import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC20",
	localId: "RC20",

	// Card informations
	name: {
		en: "Elesa",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
