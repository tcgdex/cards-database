import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-251",
	localId: 251,

	// Card informations
	name: {
		en: "Giant Bomb",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/251/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/251/high",
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
