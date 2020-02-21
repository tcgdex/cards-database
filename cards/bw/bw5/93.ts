import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-93",
	localId: 93,

	// Card informations
	name: {
		en: "Dark Patch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/93/high",
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
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
