import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-105",
	localId: 105,

	// Card informations
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/105/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/105/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/105/high",
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card
