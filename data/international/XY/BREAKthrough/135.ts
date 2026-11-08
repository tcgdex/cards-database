import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Buddy-Buddy Rescue",
		'fr-fr': "Rescousse Copain-Copain",
		'es-es': "Rescate Colega-Colega",
		'it-it': "Salvamico",
		'pt-br': "Resgate de Colega",
		'de-de': "Vetternhilfe"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur place un Pokémon de sa pile de défausse dans sa main. (Votre adversaire choisit en premier.)",
		'en-us': "Each player puts a Pokémon from his or her discard pile into his or her hand. (Your opponent chooses first.)",
		'es-es': "Los jugadores ponen 1 Pokémon de su pila de descartes en su mano. (Tu rival elige primero).",
		'it-it': "Ciascun giocatore prende un Pokémon dalla sua pila degli scarti e lo aggiunge alle carte che ha in mano (il tuo avversario sceglie per primo).",
		'pt-br': "Cada jogador coloca um Pokémon da sua pilha de descarte na sua mão. (Seu oponente escolhe primeiro.)",
		'de-de': "Jeder Spieler nimmt 1 Pokémon aus seinem Ablagestapel auf seine Hand. (Dein Gegner beginnt.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286381,
		tcgplayer: 107255
	}
}

export default card
