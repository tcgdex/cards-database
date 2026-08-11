import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Worker",
		'fr-fr': "Ouvrière",
		'es-es': "Operaria",
		'it-it': "Lavoratrice",
		'pt-br': "Trabalhadora",
		'de-de': "Arbeiterin"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards. Discard a Stadium in play.",
		'fr-fr': "Piochez 3 cartes. Défaussez un Stade en jeu.",
		'es-es': "Roba 3 cartas. Descarta un Estadio en juego.",
		'it-it': "Pesca tre carte. Scarta una carta Stadio in gioco.",
		'pt-br': "Compre 3 cartas. Descarte 1 Estádio em jogo.",
		'de-de': "Ziehe 3 Karten. Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682214,
				tcgplayer: 451815
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682214,
				tcgplayer: 451815
			}
		},
	],
}

export default card
