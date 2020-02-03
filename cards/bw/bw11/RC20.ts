import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw11/RC20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC20/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

