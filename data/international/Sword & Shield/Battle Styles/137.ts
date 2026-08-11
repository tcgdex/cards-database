import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tower of Darkness",
		'fr-fr': "Tour des Ténèbres",
		'es-es': "Torre de las Sombras",
		'it-it': "Torre Buio",
		'pt-br': "Torre das Sombras",
		'de-de': "Turm des Unlichts"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may draw 2 cards. In order to use this effect, that player must discard a Single Strike card from their hand.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut piocher 2 cartes. Afin d'utiliser cet effet, ce joueur doit défausser une carte Poing Final de sa main.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede robar 2 cartas. Para poder usar este efecto, ese jugador debe descartar 1 carta de Golpe Brusco de su mano.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può pescare due carte. Per usare questo effetto, quel giocatore deve scartare una carta Colpo Singolo che ha in mano.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá comprar 2 cartas. Para usar este efeito, aquele jogador deverá descartar 1 carta Golpe Decisivo da própria mão.",
		'de-de': "Einmal während des Zuges jedes Spielers, kann jener Spieler 2 Karten ziehen. Um diesen Effekt einzusetzen, muss jener Spieler 1 Fokussierter-Angriff-Karte von seiner Hand auf seinen Ablagestapel legen."
	},

	regulationMark: "E",
	trainerType: "Stadium",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 546036,
				tcgplayer: 234144
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 546036,
				tcgplayer: 234144
			}
		},
	],
}

export default card
