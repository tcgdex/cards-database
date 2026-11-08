import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Factory",
		'fr-fr': "Usine de la Team Rocket",
		'de-de': "Team Rockets Fabrik",
		'it-it': "Fabbrica del Team Rocket",
		'es-es': "Fábrica del Team Rocket",
		'pt-br': "Fábrica da Equipe Rocket",
		'es-mx': "Fábrica del Equipo Rocket"
	},


	illustrator: "imoniii",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, if they played a Supporter card that has \"Team Rocket\" in its name from their hand this turn, they may draw 2 cards.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, si ce joueur a joué de sa main une carte Supporter ayant \" Team Rocket \" dans son nom pendant ce tour, il peut piocher 2 cartes.",
		'de-de': "Einmal während des Zuges jedes Spielers, wenn er eine Unterstützerkarte, bei der \"Team Rocket\" zum Namen gehört, während dieses Zuges aus seiner Hand gespielt hat, kann er 2 Karten ziehen.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, se quel giocatore ha giocato una carta Aiuto che ha \"Team Rocket\" nel nome dalla propria mano durante questo turno, può pescare due carte.",
		'es-es': "Una vez durante el turno de cada jugador, si ese jugador ha jugado una carta de Partidario de su mano que tenga \"Team Rocket\" en su nombre durante este turno, puede robar 2 cartas.",
		'pt-br': "Uma vez durante o turno de cada jogador, se ele jogou uma carta de Apoiador que tenha \"Equipe Rocket\" em seu nome da própria mão neste turno, ele poderá comprar 2 cartas.",
		'es-mx': "Una vez durante el turno de cada jugador, si ese jugador jugó una carta de Partidario de su mano que tenga \"Equipo Rocket\" en su nombre durante este turno, puede robar 2 cartas."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826047,
				tcgplayer: 632974
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826047,
				tcgplayer: 632974
			}
		},
	],
}

export default card
