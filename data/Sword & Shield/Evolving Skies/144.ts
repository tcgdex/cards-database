import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Crystal Cave",
		fr: "Caverne de Cristal",
		es: "Cueva Cristal",
		it: "Caverna dei Cristalli",
		pt: "Caverna de Cristal",
		de: "Kristallhöhle"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may heal 30 damage from each of their Metal Pokémon and Dragon Pokémon.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur peut soigner 30 dégâts de chacun de ses Pokémon Metal et Pokémon Dragon.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede curar 30 puntos de daño a cada uno de sus Pokémon Metal y Pokémon Dragon.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può curare 30 danni da ciascuno dei suoi Pokémon Metal e Dragon.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá curar 30 pontos de dano de cada um dos seus próprios Pokémon Metal e Pokémon Dragon.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 30 Schadenspunkte bei jedem seiner Metal-Pokémon und Dragon-Pokémon heilen."
	},

	trainerType: "Stadium",
	illustrator: "Toyste Beach",
	regulationMark: "E"
}

export default card
