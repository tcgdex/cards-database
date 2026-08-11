import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Professor Juniper",
		'fr-fr': "Professeur Keteleeria",
		'es-es': "Prof.ª Encina",
		'it-it': "Prof.ssa Aralia",
		'pt-br': "Professora Juniper",
		'de-de': "Prof. Esche"
	},

	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez votre main et piochez 7 cartes.",
		'en-us': "Discard your hand and draw 7 cards.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta la tua mano e pesca sette carte.",
		'pt-br': "Descarte sua mão e compre 7 cards.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 neue Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280994,
		tcgplayer: 88398
	}
}

export default card
