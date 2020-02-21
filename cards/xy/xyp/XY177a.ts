import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY177a",
	localId: "XY177a",

	// Card informations
	name: {
		en: "Karen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY177a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY177a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
