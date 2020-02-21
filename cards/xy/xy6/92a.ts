import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-92",
	localId: 92,

	// Card informations
	name: {
		en: "Trainers' Mail",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/92a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/92a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
