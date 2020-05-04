import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY172",
	localId: "XY172",

	// Card informations
	name: {
		en: "Salamence Spirit Link",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY172/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
