import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Whitney",
		'fr-fr': "Blanche",
		'es-es': "Blanca",
		'it-it': "Chiara",
		'pt-br': "Whitney",
		'de-de': "Bianka"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez une carte. Ensuite, piochez 2 cartes pour chaque autre Blanche dans votre pile de défausse.",
		'en-us': "Draw a card. Then, draw 2 cards for each other Whitney in your discard pile.",
		'es-es': "Roba 1 carta. Después, roba 2 cartas por cada una de las otras cartas de Blanca en tu pila de descartes.",
		'it-it': "Pesca una carta. Poi pesca due carte per ogni altra Chiara nella tua pila degli scarti.",
		'pt-br': "Compre 1 carta. Em seguida, compre 2 cartas para cada uma das outras Whitney na sua pilha de descarte.",
		'de-de': "Ziehe 1 Karte. Ziehe anschließend 2 Karten für jede andere Bianka-Karte in deinem Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 365847,
		tcgplayer: 179031
	}
}

export default card
