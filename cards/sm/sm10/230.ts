import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-230",
	localId: 230,

	// Card informations
	name: {
		en: "Electromagnetic Radar",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/230/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/230/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
