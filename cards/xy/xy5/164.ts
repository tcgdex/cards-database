import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-164",
	localId: 164,

	// Card informations
	name: {
		en: "Weakness Policy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ayaka Yoshida",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
