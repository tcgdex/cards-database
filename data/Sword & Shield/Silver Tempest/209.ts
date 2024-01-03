import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Worker",
		fr: "Ouvrière",
		es: "Operaria",
		it: "Lavoratrice",
		pt: "Trabalhadora",
		de: "Arbeiterin"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards. Discard a Stadium in play.",
		fr: "Piochez 3 cartes. Défaussez un Stade en jeu.",
		es: "Roba 3 cartas. Descarta un Estadio en juego.",
		it: "Pesca tre carte. Scarta una carta Stadio in gioco.",
		pt: "Compre 3 cartas. Descarte 1 Estádio em jogo.",
		de: "Ziehe 3 Karten. Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card