import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Lysandre's Trump Card",
		'fr-fr': "Atout de Lysandre",
		'es-es': "As Oculto de Lysson",
		'it-it': "Asso di Elisio",
		'pt-br': "Coringa de Lysandre",
		'de-de': "Flordelis' Trumpfkarte"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur mélange toutes les cartes de sa pile de défausse avec son deck (à part Atout de Lysandre).",
		'en-us': "Each player shuffles all cards in his or her discard pile into his or her deck (except for Lysandre's Trump Card).",
		'es-es': "Los jugadores ponen todas las cartas de su pila de descartes en su baraja y las barajan todas (excepto el As Oculto de Lysson).",
		'it-it': "Ogni giocatore rimischia le carte della sua pila degli scarti nel proprio mazzo (a eccezione di Asso di Elisio).",
		'pt-br': "Cada jogador embaralha todos os cards da própria pilha de descarte em seu próprio baralho (exceto o Coringa de Lysandre).",
		'de-de': "Jeder Spieler mischt die Karten seines Ablagestapels zurück in sein Deck (außer Flordelis' Trumpfkarte)."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281906,
		tcgplayer: 94667
	}
}

export default card
