import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-160",
	localId: 160,

	// Card informations
	name: {
		en: "Energy Retrieval",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/160/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/160/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Put up to 2 basic Energy cards from your discard pile into your hand.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

