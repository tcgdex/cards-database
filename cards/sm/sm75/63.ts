import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsqu’un joueur lance une pièce pour l'État Spécial Brûlé entre chaque tour, cet État Spécial n’est pas ôté, même si le résultat est face.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
