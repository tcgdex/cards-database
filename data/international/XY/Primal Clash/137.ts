import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Rough Seas",
		'fr-fr': "Mer Agitée",
		'es-es': "Mar Agitado",
		'it-it': "Mare Mosso",
		'pt-br': "Mares Agitados",
		'de-de': "Raue See"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 30 dégâts à chacun de ses Pokémon Water et de ses Pokémon Lightning.",
		'en-us': "Once during each player's turn, that player may heal 30 damage from each of his or her Water Pokémon and Lightning Pokémon.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede curar 30 puntos de daño a cada uno de sus Pokémon Water y Pokémon Lightning.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può curare 30 danni da ciascuno dei suoi Pokémon Water e Lightning.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, esse jogador pode curar 30 de danos de cada um de seus próprios Pokémon Water e Pokémon Lightning.",
		'de-de': "Einmal während seines Zuges darf jeder Spieler 30 Schadenspunkte bei jedem seiner Water-Pokémon und Lightning-Pokémon heilen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 273668,
		tcgplayer: 96035
	}
}

export default card
