import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Silent Lab",
		'fr-fr': "Labo Silence",
		'es-es': "Laboratorio Silencioso",
		'it-it': "Studio Insonorizzato",
		'pt-br': "Laboratório do Silêncio",
		'de-de': "Silentiumlabor"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chacun des Pokémon de base en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent.",
		'en-us': "Each Basic Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities.",
		'es-es': "Los Pokémon Básicos en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad.",
		'it-it': "Le abilità dei Pokémon Base in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno effetto.",
		'pt-br': "Cada Pokémon Básico em jogo, na mão de cada jogador e na pilha de descarte de cada jogador não possui Habilidades.",
		'de-de': "Jedes Basis-Pokémon im Spiel, auf der Hand beider Spieler und im Ablagestapel beider Spieler hat keine Fähigkeit."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 273671,
		tcgplayer: 96038
	}
}

export default card
