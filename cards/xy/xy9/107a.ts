import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-107",
	localId: 107,

	// Card informations
	name: {
		en: "Professor Sycamore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/107a/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/107a/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

