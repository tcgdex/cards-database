import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-121",
	localId: 121,

	// Card informations
	name: {
		en: "Fighting Cube 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/121/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
