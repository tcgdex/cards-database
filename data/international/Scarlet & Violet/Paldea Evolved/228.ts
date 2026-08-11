import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		'fr-fr': "Farigiraf",
		'en-us': "Farigiraf",
		'es-es': "Farigiraf",
		'it-it': "Farigiraf",
		'pt-br': "Farigiraf",
		'de-de': "Farigiraf"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Girafarig",
		'en-us': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Soit l'Un Soit l'Autre",
			'en-us': "Either Face",
			'es-es': "Dos Caras",
			'it-it': "Sceglifaccia",
			'pt-br': "Qualquer Face",
			'de-de': "Gesichtswahl"
		},

		effect: {
			'fr-fr': "Choisissez un joueur. Ce joueur-là mélange sa main avec son deck et pioche 4 cartes.",
			'en-us': "Choose a player. That player shuffles their hand into their deck and draws 4 cards.",
			'es-es': "Elige un jugador. Ese jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			'it-it': "Scegli un giocatore. Quel giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
			'pt-br': "Escolha um jogador. Aquele jogador embaralha a mão dele no baralho dele e compra 4 cartas.",
			'de-de': "Wähle 1 Spieler. Jener Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Puissant Rayon",
			'en-us': "Power Beam",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'pt-br': "Raio de Poder",
			'de-de': "Power-Strahl"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715703,
				tcgplayer: 497631,
				cardtrader: 248880
			}
		},
	],

	illustrator: "Mina Nakai",

	description: {
		'en-us': "Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig's.",
	},
}

export default card
