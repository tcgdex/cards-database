import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-75",
	localId: 75,

	// Card informations
	name: {
		en: "Hex Maniac",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/75a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/75a/high",
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
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
