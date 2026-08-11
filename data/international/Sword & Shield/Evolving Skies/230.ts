import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Crystal Cave",
		'fr-fr': "Caverne de Cristal",
		'es-es': "Cueva Cristal",
		'it-it': "Caverna dei Cristalli",
		'pt-br': "Caverna de Cristal",
		'de-de': "Kristallhöhle"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may heal 30 damage from each of their Metal Pokémon and Dragon Pokémon.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut soigner 30 dégâts de chacun de ses Pokémon Metal et Pokémon Dragon.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede curar 30 puntos de daño a cada uno de sus Pokémon Metal y Pokémon Dragon.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può curare 30 danni da ciascuno dei suoi Pokémon Metal e Dragon.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá curar 30 pontos de dano de cada um dos seus próprios Pokémon Metal e Pokémon Dragon.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler 30 Schadenspunkte bei jedem seiner Metal-Pokémon und Dragon-Pokémon heilen."
	},

	trainerType: "Stadium",
	illustrator: "Toyste Beach",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574288,
				tcgplayer: 246805
			}
		},
	],
}

export default card
