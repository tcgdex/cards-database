import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lumiose City",
		'fr-fr': "Illumis",
		'es-es': "Ciudad Luminalia",
		'es-mx': "Ciudad Luminalia",
		'de-de': "Illumina City",
		'it-it': "Luminopoli",
		'pt-br': "Cidade de Lumiose"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may search their deck for a Basic Pokémon and put it onto their Bench. Then, that player shuffles their deck. If a player searches their deck in this way, their turn ends.",
		'fr-fr': "Une fois pendant le tour de chaque personne, cette personne-là peut chercher dans son deck un Pokémon de base et le placer sur son Banc. Cette personne mélange ensuite son deck. Si une personne fait une recherche dans son deck de cette façon, son tour se termine.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja 1 Pokémon Básico y ponerlo en su Banca. Después, ese jugador baraja las cartas de su baraja. Si un jugador busca en su baraja de esta manera, su turno termina.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su mazo 1 Pokémon Básico y ponerlo en su Banca. Después, ese jugador baraja su mazo. Si un jugador busca en su mazo de esta manera, su turno termina.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach 1 Basis-Pokémon durchsuchen und es auf seine Bank legen. Jener Spieler mischt anschließend sein Deck. Wenn ein Spieler auf diese Weise sein Deck durchsucht, endet sein Zug.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel proprio mazzo un Pokémon Base e metterlo nella propria panchina. Poi quel giocatore rimischia il proprio mazzo. Se un giocatore cerca nel proprio mazzo in questo modo, il suo turno finisce.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá procurar no próprio baralho por um Pokémon Básico e colocá-lo no próprio Banco. Em seguida, aquele jogador embaralha o próprio baralho. Se um jogador procurar no próprio baralho desta forma, o turno dele acabará."
	},

	trainerType: "Stadium",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684348,
				cardmarket: 877494
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684348,
				cardmarket: 877494
			}
		}
	],


}

export default card
