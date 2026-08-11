import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Moonlit Hill",
		'fr-fr': "Colline Clair de Lune",
		'es-es': "Colina de Luz Lunar",
		'it-it': "Collina Chiarodiluna",
		'pt-br': "Monte Enluarado",
		'de-de': "Mondscheinhügel"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may discard a Basic {P} Energy card from their hand in order to heal 30 damage from each of their Pokémon.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur-là peut défausser une carte Énergie {P} de base de sa main pour soigner 30 dégâts de chacun de ses Pokémon.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede descartar 1 carta de Energía {P} Básica de su mano para poder curar 30 puntos de daño a cada uno de sus Pokémon.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare una carta Energia base {P} che ha in mano per curare ciascuno dei suoi Pokémon da 30 danni.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá descartar uma carta de Energia {P} Básica da própria mão para curar 30 pontos de dano de cada um dos seus próprios Pokémon.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Basis-{P}-Energiekarte aus seiner Hand auf seinen Ablagestapel legen, um 30 Schadenspunkte bei jedem seiner Pokémon zu heilen."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751620,
				tcgplayer: 534443,
				cardtrader: 274265
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751620,
				tcgplayer: 534443,
				cardtrader: 274265
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card
