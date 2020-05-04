import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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













	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
