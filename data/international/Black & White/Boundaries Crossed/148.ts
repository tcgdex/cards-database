import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Cheren",
		'fr-fr': "Tcheren",
		'es-es': "Cheren",
		'it-it': "Komor",
		'pt-br': "Cheren",
		'de-de': "Cheren"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 3 cartes.",
		'en-us': "Draw 3 cards.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cards.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280735,
		tcgplayer: 84250
	}
}

export default card
