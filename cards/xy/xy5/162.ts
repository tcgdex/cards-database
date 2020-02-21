import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-162",
	localId: 162,

	// Card informations
	name: {
		en: "Enhanced Hammer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
