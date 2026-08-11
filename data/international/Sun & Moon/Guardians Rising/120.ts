import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Brooklet Hill",
		'fr-fr': "Colline Clapotis",
		'es-es': "Colina Saltagua",
		'it-it': "Collina Scrosciante",
		'pt-br': "Ladeira Brooklet",
		'de-de': "Plätscherhügel"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, ce joueur peut chercher un Pokémon Water de base ou un Pokémon Fighting de base dans son deck, le placer sur son Banc, puis mélanger son deck.",
		'en-us': "Once during each player’s turn, that player may search their deck for a Basic Water Pokémon or Basic Fighting Pokémon, put it onto their Bench, and shuffle their deck.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja 1 Pokémon Water Básico o 1 Pokémon Fighting Básico, ponerlo en su Banca y barajar las cartas de su baraja.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel suo mazzo un Pokémon Base Water o un Pokémon Base Fighting, metterlo nella sua panchina e rimischiare le carte del suo mazzo.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, aquele jogador pode procurar por 1 Pokémon Water Básico ou por 1 Pokémon Fighting Básico no próprio baralho, colocá-lo no próprio Banco e embaralhar o próprio baralho.",
		'de-de': "Einmal während des Zuges jedes Spielers kann der Spieler sein Deck nach 1 Water-Basis-Pokémon oder 1 Fighting-Basis-Pokémon durchsuchen, es auf seine Bank legen und sein Deck mischen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 297572,
		tcgplayer: 131040
	}
}

export default card
