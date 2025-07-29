import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Buddy-Buddy Rescue",
		fr: "Rescousse Copain-Copain",
		es: "Rescate Colega-Colega",
		it: "Salvamico",
		pt: "Resgate de Colega",
		de: "Vetternhilfe"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur place un Pokémon de sa pile de défausse dans sa main. (Votre adversaire choisit en premier.)",
		en: "Each player puts a Pokémon from his or her discard pile into his or her hand. (Your opponent chooses first.)",
		es: "Los jugadores ponen 1 Pokémon de su pila de descartes en su mano. (Tu rival elige primero).",
		it: "Ciascun giocatore prende un Pokémon dalla sua pila degli scarti e lo aggiunge alle carte che ha in mano (il tuo avversario sceglie per primo).",
		pt: "Cada jogador coloca um Pokémon da sua pilha de descarte na sua mão. (Seu oponente escolhe primeiro.)",
		de: "Jeder Spieler nimmt 1 Pokémon aus seinem Ablagestapel auf seine Hand. (Dein Gegner beginnt.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286381
	}
}

export default card
