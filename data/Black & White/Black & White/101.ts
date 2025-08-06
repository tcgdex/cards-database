import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Professor Juniper",
		fr: "Professeur Keteleeria",
		es: "Prof.ª Encina",
		it: "Prof.ssa Aralia",
		pt: "Professor Juniper",
		de: "Prof. Esche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez votre main et piochez 7 cartes.",
		en: "Discard your hand and draw 7 cards.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		it: "Scarta la tua mano e pesca sette carte.",
		pt: "Descarte sua mão e compre 7 cards.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 neue Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 279839,
		tcgplayer: 88395
	}
}

export default card
