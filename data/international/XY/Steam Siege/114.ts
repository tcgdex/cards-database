import { Card } from 'models/database/card'
import Set from '../Steam Siege'

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
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez votre main et piochez 7 cartes.",
		'en-us': "Discard your hand and draw 7 cards.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta la tua mano e pesca sette carte.",
		'pt-br': "Descarte sua mão e compre 7 cards.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 291561,
		tcgplayer: 121238
	}
}

export default card
