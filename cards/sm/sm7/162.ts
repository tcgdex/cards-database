import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-162",
	localId: 162,

	// Card informations
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez une carte de votre main avec votre deck. Dans ce cas, piochez 3 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
