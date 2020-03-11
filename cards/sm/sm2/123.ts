import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-123",
	localId: 123,

	// Card informations
	name: {
		en: "Energy Recycler",
		fr: "Recycleur d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
