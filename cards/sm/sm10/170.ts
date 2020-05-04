import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-170",
	localId: 170,

	// Card informations
	name: {
		en: "Energy Spinner",
		fr: "Spinner d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/170/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/170/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/170/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/170/high",
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
			fr: "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie de base au lieu d’une. Mélangez ensuite votre deck.",
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
