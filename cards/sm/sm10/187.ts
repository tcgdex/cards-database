import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-187",
	localId: 187,

	// Card informations
	name: {
		en: "Surprise Box",
		fr: "Boîte Surprise",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/187/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/187/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/187/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Placez une carte de la pile de défausse de votre adversaire dans sa main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
