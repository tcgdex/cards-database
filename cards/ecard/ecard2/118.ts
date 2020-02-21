import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-118",
	localId: 118,

	// Card informations
	name: {
		en: "Apricorn Forest",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/118/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
