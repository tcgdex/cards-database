import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-111",
	localId: 111,

	// Card informations
	name: {
		en: "Crushing Hammer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
