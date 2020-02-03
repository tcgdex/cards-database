import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Challenge!",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card

