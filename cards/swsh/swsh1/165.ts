import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-165",
	localId: 165,

	// Card informations
	name: {
		en: "Hop",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/165/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/165/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			en: "Draw 3 cards.",
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

