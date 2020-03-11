import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-208",
	localId: 208,

	// Card informations
	name: {
		en: "Marnie",
		fr: "Rosemary",
	},







	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	effect: {
		en: "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, you draw 5 cards, and your opponent draws 4 cards.",
		fr: "Chaque joueur mélange sa main, puis la place en dessous de son deck. Si l’un des joueurs place ainsi au moins une carte en dessous de son deck, vous piochez 5 cartes et votre adversaire en pioche 4.",
	},







	rarity: Rarity.RareRainbow,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
