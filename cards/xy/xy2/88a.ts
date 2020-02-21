import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Blacksmith",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/88a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
