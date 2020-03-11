import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-109",
	localId: 109,

	// Card informations
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/109/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/109/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/109/high",
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
