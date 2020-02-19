import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-128",
	localId: 128,

	// Card informations
	name: {
		en: "Memory Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/128/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/128/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

