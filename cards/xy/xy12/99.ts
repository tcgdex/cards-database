import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-99",
	localId: 99,

	// Card informations
	name: {
		en: "Basic Fairy Energy",
		fr: "Énergie Fairy de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/99/high",
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
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
