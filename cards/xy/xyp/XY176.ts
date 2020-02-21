import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY176",
	localId: "XY176",

	// Card informations
	name: {
		en: "Champions Festival",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY176/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY176/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
