import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Albert",
		'en-us': "Falkner",
		'es-es': "Pegaso",
		'it-it': "Valerio",
		'pt-br': "Falkner",
		'de-de': "Falk"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Piochez 2 cartes. Si vous avez un Stade en jeu, piochez 2 cartes supplémentaires.",
		'en-us': "Draw 2 cards. If you have a Stadium in play, draw 2 more cards.",
		'es-es': "Roba 2 cartas. Si tienes un Estadio en juego, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se hai in gioco una carta Stadio, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se você tiver um Estádio em jogo, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn du eine Stadionkarte im Spiel hast, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715726,
				tcgplayer: 497666,
				cardtrader: 248897
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
