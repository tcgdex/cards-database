import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-162",
	localId: 162,

	// Card informations
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psychic de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/162/high",
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
