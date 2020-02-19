import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/89/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/89/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

