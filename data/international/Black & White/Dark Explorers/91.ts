import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Cheren",
		'fr-fr': "Tcheren",
		'es-es': "Cheren",
		'it-it': "Komor",
		'pt-br': "Cheren",
		'de-de': "Cheren"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cards.",
		'de-de': "Ziehe 3 Karten."
	},

	thirdParty: {
		cardmarket: 280419,
		tcgplayer: 84249
	}
}

export default card
