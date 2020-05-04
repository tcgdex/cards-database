import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-161",
	localId: 161,

	// Card informations
	name: {
		en: "Dive Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
