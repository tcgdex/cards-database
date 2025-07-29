import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Lysandre's Trump Card",
		fr: "Atout de Lysandre",
		es: "As Oculto de Lysson",
		it: "Asso di Elisio",
		pt: "Coringa de Lysandre",
		de: "Flordelis' Trumpfkarte"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur mélange toutes les cartes de sa pile de défausse avec son deck (à part Atout de Lysandre).",
		en: "Each player shuffles all cards in his or her discard pile into his or her deck (except for Lysandre's Trump Card).",
		es: "Los jugadores ponen todas las cartas de su pila de descartes en su baraja y las barajan todas (excepto el As Oculto de Lysson).",
		it: "Ogni giocatore rimischia le carte della sua pila degli scarti nel proprio mazzo (a eccezione di Asso di Elisio).",
		pt: "Cada jogador embaralha todos os cards da própria pilha de descarte em seu próprio baralho (exceto o Coringa de Lysandre).",
		de: "Jeder Spieler mischt die Karten seines Ablagestapels zurück in sein Deck (außer Flordelis' Trumpfkarte)."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281906
	}
}

export default card
