import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		fr: "Farigiraf",
		en: "Farigiraf",
		es: "Farigiraf",
		it: "Farigiraf",
		pt: "Farigiraf",
		de: "Farigiraf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		fr: "Girafarig",
		en: "Girafarig",
		es: "Girafarig",
		it: "Girafarig",
		pt: "Girafarig",
		de: "Girafarig"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Soit l'Un Soit l'Autre",
			en: "Either Face",
			es: "Dos Caras",
			it: "Sceglifaccia",
			pt: "Qualquer Face",
			de: "Gesichtswahl"
		},

		effect: {
			fr: "Choisissez un joueur. Ce joueur-là mélange sa main avec son deck et pioche 4 cartes.",
			en: "Choose a player. That player shuffles their hand into their deck and draws 4 cards.",
			es: "Elige un jugador. Ese jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			it: "Scegli un giocatore. Quel giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
			pt: "Escolha um jogador. Aquele jogador embaralha a mão dele no baralho dele e compra 4 cartas.",
			de: "Wähle 1 Spieler. Jener Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Puissant Rayon",
			en: "Power Beam",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Raio de Poder",
			de: "Power-Strahl"
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715630,
				tcgplayer: 497573,
				cardtrader: 248809
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715630,
				tcgplayer: 497573,
				cardtrader: 248809
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		en: "Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig's.",
	},
}

export default card
