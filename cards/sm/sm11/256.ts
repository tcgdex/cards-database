import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-256",
	localId: 256,

	// Card informations
	name: {
		en: "Viridian Forest",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/256/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/256/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
