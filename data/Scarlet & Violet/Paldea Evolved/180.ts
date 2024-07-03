import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Albert",
		en: "Falkner",
		es: "Pegaso",
		it: "Valerio",
		pt: "Falkner",
		de: "Falk"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Piochez 2 cartes. Si vous avez un Stade en jeu, piochez 2 cartes supplémentaires.",
		en: "Draw 2 cards. If you have a Stadium in play, draw 2 more cards.",
		es: "Roba 2 cartas. Si tienes un Estadio en juego, roba 2 cartas más.",
		it: "Pesca due carte. Se hai in gioco una carta Stadio, pesca altre due carte.",
		pt: "Compre 2 cartas. Se você tiver um Estádio em jogo, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn du eine Stadionkarte im Spiel hast, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card