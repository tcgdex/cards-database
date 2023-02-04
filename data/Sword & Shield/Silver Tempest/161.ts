import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Primordial Altar",
		fr: "Autel Primordial",
		es: "Altar Primigenio",
		it: "Altare Primordiale",
		pt: "Altar Primordial",
		de: "Urzeitlicher Altar"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may look at the top card of their deck. They may discard that card.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur-là peut regarder la carte du dessus de son deck. Il peut défausser cette carte.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede mirar la primera carta de su baraja. Puede descartar esa carta.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può guardare la prima carta del suo mazzo. Può scartare quella carta.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá olhar a carta de cima do próprio baralho. Ele(a) poderá descartar aquela carta.",
		de: "Einmal während des Zuges jedes Spielers kann sich jener Spieler die oberste Karte seines Decks anschauen. Er kann jene Karte auf den Ablagestapel legen."
	},

	trainerType: "Stadium",
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card