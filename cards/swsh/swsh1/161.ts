import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-161",
	localId: 161,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/161/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/161/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
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

