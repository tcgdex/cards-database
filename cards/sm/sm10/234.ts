import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-234",
	localId: 234,

	// Card informations
	name: {
		en: "Triple Acceleration Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/234/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/234/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
