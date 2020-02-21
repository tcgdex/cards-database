import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/111/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/111/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/111/high",
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
