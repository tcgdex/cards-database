import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-63",
	localId: 63,

	// Card informations
	name: {
		en: "Wela Volcano Park",
		fr: "Parc Volcanique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsqu’un joueur lance une pièce pour l'État Spécial Brûlé entre chaque tour, cet État Spécial n’est pas ôté, même si le résultat est face.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
