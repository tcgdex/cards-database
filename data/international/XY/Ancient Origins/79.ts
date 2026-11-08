import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Paint Roller",
		'fr-fr': "Rouleau à Peinture",
		'es-es': "Rodillo de Pintura",
		'it-it': "Imbiancarullo",
		'pt-br': "Rolo de Pintura",
		'de-de': "Farbroller"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez toute carte Stade en jeu. Ensuite, piochez une carte.",
		'en-us': "Discard any Stadium card in play. Then, draw a card.",
		'es-es': "Descarta cualquier carta de Estadio en juego. Después, roba 1 carta.",
		'it-it': "Scarta una carta Stadio in gioco. Poi, pesca una carta.",
		'pt-br': "Descarte qualquer card de Estádio em jogo. Em seguida, compre um card.",
		'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel. Ziehe anschließend 1 Karte."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284260,
		tcgplayer: 101501
	}
}

export default card
