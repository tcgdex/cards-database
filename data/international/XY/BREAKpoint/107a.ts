import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Professor Sycamore",
		'fr-fr': "Professeur Platane",
		'es-es': "Profesor Ciprés",
		'it-it': "Professor Platan",
		'pt-br': "Professor Sycamore",
		'de-de': "Prof. Platan"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main et piochez 7 cartes.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta la tua mano e pesca sette carte.",
		'pt-br': "Descarte sua mão e compre 7 cards.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	thirdParty: {
		cardmarket: 288282
	}
}

export default card
