import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-168",
	localId: 168,

	// Card informations
	name: {
		en: "Darkness Energy",
		fr: "Énergie Darkness de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/168/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/168/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/168/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/168/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

