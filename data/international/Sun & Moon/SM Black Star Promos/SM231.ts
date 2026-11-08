import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Champions Festival",
		'fr-fr': "Festival des Champions",
		'es-es': "Festival de Campeones",
		'it-it': "Festa dei Campioni",
		'pt-br': "Festival dos Campeões",
		'de-de': "Festival der Champions"
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player’s turn, if that player has 6 Pokémon in play, he or she may heal 10 damage from each of his or her Pokémon.",
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, si ce joueur a 6 Pokémon en jeu, il peut soigner 10 dégâts à chacun de ses Pokémon.",
		'es-es': "Una vez durante el turno de cada jugador, si ese jugador tiene a 6 Pokémon en juego, puede curar 10 puntos de daño a cada uno de sus Pokémon.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, se quel giocatore ha sei Pokémon in gioco, può curare 10 danni da ciascuno dei suoi Pokémon.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, se esse jogador possuir 6 Pokémon em jogo, ele ou ela poderá curar 10 de danos de cada um de seus próprios Pokémon.",
		'de-de': "Einmal während seines Zuges darf jeder Spieler, falls er 6 Pokémon im Spiel hat, 10 Schadenspunkte bei jedem seiner Pokémon heilen."
	},

	trainerType: "Stadium"
}

export default card
