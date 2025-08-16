import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Paint Roller",
		fr: "Rouleau à Peinture",
		es: "Rodillo de Pintura",
		it: "Imbiancarullo",
		pt: "Rolo de Pintura",
		de: "Farbroller"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez toute carte Stade en jeu. Ensuite, piochez une carte.",
		en: "Discard any Stadium card in play. Then, draw a card.",
		es: "Descarta cualquier carta de Estadio en juego. Después, roba 1 carta.",
		it: "Scarta una carta Stadio in gioco. Poi, pesca una carta.",
		pt: "Descarte qualquer card de Estádio em jogo. Em seguida, compre um card.",
		de: "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel. Ziehe anschließend 1 Karte."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284260,
		tcgplayer: 101501
	}
}

export default card
