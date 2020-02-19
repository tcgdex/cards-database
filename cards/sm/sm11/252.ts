import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-252",
	localId: 252,

	// Card informations
	name: {
		en: "Karate Belt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/252/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/252/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

