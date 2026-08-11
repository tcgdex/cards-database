import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Stormy Mountains",
		'fr-fr': "Montagnes Orageuses",
		'es-es': "Montañas Tormentosas",
		'it-it': "Montagne Tempestose",
		'pt-br': "Montanhas Tempestuosas",
		'de-de': "Sturmgebirge"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may search their deck for a Basic Lightning Pokémon or Basic Dragon Pokémon and put it onto their Bench. Then, that player shuffles their deck.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut chercher dans son deck un Pokémon Lightning de base ou un Pokémon Dragon de base, puis le placer sur son Banc. Ce joueur mélange ensuite son deck.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja 1 Pokémon Lightning Básico o 1 Pokémon Dragon Básico y ponerlo en su Banca. Después, ese jugador baraja las cartas de su baraja.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel suo mazzo un Pokémon Base Lightning o Dragon e metterlo nella sua panchina. Poi quel giocatore rimischia le carte del suo mazzo.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá procurar por 1 Pokémon Lightning Básico ou 1 Pokémon Dragon Básico no próprio baralho e colocá-lo no próprio Banco. Em seguida, aquele jogador embaralha o próprio baralho.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach 1 Basis-Lightning-Pokémon oder Basis-Dragon-Pokémon durchsuchen und es auf seine Bank legen. Anschließend mischt jener Spieler sein Deck."
	},

	trainerType: "Stadium",
	illustrator: "Toyste Beach",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574290,
				tcgplayer: 246807
			}
		},
	],
}

export default card
