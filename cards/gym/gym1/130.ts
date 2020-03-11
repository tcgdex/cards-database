import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-130",
	localId: 130,

	// Card informations
	name: {
		en: "Lightning Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
