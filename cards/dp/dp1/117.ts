import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/117/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/117/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kai Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
