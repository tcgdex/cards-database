import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Marnie",
		fr: "Rosemary",
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, you draw 5 cards, and your opponent draws 4 cards.",
		fr: "Chaque joueur mélange sa main, puis la place en dessous de son deck. Si l’un des joueurs place ainsi au moins une carte en dessous de son deck, vous piochez 5 cartes et votre adversaire en pioche 4.",
	},

	trainerType: "Supporter",
	regulationMark: "D"
}

export default card
