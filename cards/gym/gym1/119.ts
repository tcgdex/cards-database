import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-119",
	localId: 119,

	// Card informations
	name: {
		en: "Tickling Machine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card

