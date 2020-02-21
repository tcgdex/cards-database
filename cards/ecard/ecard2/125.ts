import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-125",
	localId: 125,

	// Card informations
	name: {
		en: "Healing Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/125/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
