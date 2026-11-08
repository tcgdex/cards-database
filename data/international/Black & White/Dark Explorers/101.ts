import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Twist Mountain",
		'fr-fr': "Mont Foré",
		'es-es': "Monte Tuerca",
		'it-it': "Monte Vite",
		'pt-br': "Montanha Trançada",
		'de-de': "Wendelberg"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "Once during each player’s turn, that player may flip a coin. If heads, the player puts a Restored Pokémon from his or her hand onto his or her Bench.",
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, ce joueur peut lancer une pièce. Si c’est face, le joueur place un Pokémon Recréé de sa main sur son Banc.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede lanzar una moneda. Si sale cara, el jugador busca en su baraja un Pokémon Recreado y lo pone en su Banca.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può lanciare una moneta. Se esce testa, il giocatore prende un Pokémon Ricreato dalla sua mano e lo mette nella sua panchina.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, esse jogador pode jogar uma moeda. Se sair cara, o jogador deverá colocar um Pokémon Restaurado da mão dele ou dela em seu próprio Banco.",
		'de-de': "Einmal während seines Zuges darf jeder Spieler 1 Münze werfen. Bei „Kopf“ durchsucht der Spieler sein Deck nach 1 Erweckt-Pokémon und legt es auf seine Bank."
	},

	thirdParty: {
		cardmarket: 280429,
		tcgplayer: 90087
	}
}

export default card
