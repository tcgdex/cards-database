import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-128",
	localId: 128,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/128/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/128/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/128/high",
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
			fr: "Cherchez une carte Énergie de base dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
