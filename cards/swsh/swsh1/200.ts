import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-200",
	localId: 200,

	// Card informations
	name: {
		en: "Marnie",
		fr: "Rosemary",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/200/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/200/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 29,
		name: "kirisAki"
	},



	effect: {
		en: "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, you draw 5 cards, and your opponent draws 4 cards.",
		fr: "Chaque joueur mélange sa main, puis la place en dessous de son deck. Si l’un des joueurs place ainsi au moins une carte en dessous de son deck, vous piochez 5 cartes et votre adversaire en pioche 4.",
	},







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
