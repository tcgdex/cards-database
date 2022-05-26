import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Choy"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Each player reveals their hand. Draw 3 cards.",
		fr: "Chaque joueur montre sa main. Piochez 3 cartes.",
		es: "Cada jugador enseña las cartas de su mano. Roba 3 cartas.",
		it: "Ciascun giocatore mostra le carte che ha in mano. Pesca tre carte.",
		pt: "Cada jogador revela a própria mão. Compre 3 cartas.",
		de: "Jeder Spieler zeigt seine Handkarten. Ziehe 3 Karten."
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