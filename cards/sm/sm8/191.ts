import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-191",
	localId: 191,

	// Card informations
	name: {
		en: "Thunder Mountain ◇",
		fr: "Mont Tonnerre ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/191/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/191/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/191/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/191/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
