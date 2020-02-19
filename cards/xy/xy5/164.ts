import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy5/164/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/164/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

