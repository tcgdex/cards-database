import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-94",
	localId: 94,

	// Card informations
	name: {
		en: "Enhanced Hammer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card

