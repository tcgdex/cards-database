import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-163",
	localId: 163,

	// Card informations
	name: {
		en: "Metal Energy",
		fr: "Énergie Metal de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/163/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/163/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/163/high",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
