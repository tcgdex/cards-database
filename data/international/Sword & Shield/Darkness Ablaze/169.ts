import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Rose Tower",
		'fr-fr': "Shehroz Tower",
		'es-es': "Torre Rose",
		'it-it': "Rose Tower",
		'pt-br': "Torre Rossi",
		'de-de': "Rose Tower"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Once during each player's turn, that player may draw cards until they have 3 cards in their hand.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut piocher des cartes jusqu'à en avoir 3 en main.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede robar cartas hasta que tenga 3 cartas en su mano.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può pescare fino ad avere tre carte in mano.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá comprar cartas até ter 3 cartas na própria mão.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler so lange Karten ziehen, bis er 3 Karten auf der Hand hat."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483724,
				tcgplayer: 219285
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483724,
				tcgplayer: 219285
			}
		},
	],
}

export default card
