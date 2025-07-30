import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Judge",
		fr: "Juge",
		de: "Richter"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur mélange sa main avec son deck, puis pioche 4 cartes (c’est vous qui piochez en premier).",
		en: "Each player shuffles his or her hand into his or her deck and draws 4 cards.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279234,
		tcgplayer: 86359
	}
}

export default card
