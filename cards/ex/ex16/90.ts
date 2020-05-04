import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-90",
	localId: 90,

	// Card informations
	name: {
		en: "Cyclone Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
