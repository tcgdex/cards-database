import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-173",
	localId: 173,

	// Card informations
	name: {
		en: "Fire Crystal",
		fr: "Cristal Feu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/173/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/173/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/173/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/173/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 3 cartes Énergie Fire de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
