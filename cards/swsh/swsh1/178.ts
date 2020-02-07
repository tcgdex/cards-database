import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-178",
	localId: 178,

	// Card informations
	name: {
		en: "Professor's Research (Professor Magnolia)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/178/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/178/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			en: "Discard your hand and draw 7 cards.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

