import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy5/161/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/161/high.png",
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











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

