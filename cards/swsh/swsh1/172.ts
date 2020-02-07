import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-172",
	localId: 172,

	// Card informations
	name: {
		en: "Pal Pad",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/172/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/172/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
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

