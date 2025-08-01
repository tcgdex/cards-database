import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Rose Tower",
		fr: "Shehroz Tower",
		es: "Torre Rose",
		it: "Rose Tower",
		pt: "Torre Rossi",
		de: "Rose Tower"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Once during each player's turn, that player may draw cards until they have 3 cards in their hand.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur peut piocher des cartes jusqu'à en avoir 3 en main.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede robar cartas hasta que tenga 3 cartas en su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può pescare fino ad avere tre carte in mano.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá comprar cartas até ter 3 cartas na própria mão.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler so lange Karten ziehen, bis er 3 Karten auf der Hand hat."
	},

	trainerType: "Stadium",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 483724
	}
}

export default card
