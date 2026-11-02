import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Red Card",
		fr: "Carton Rouge",
		de: "Rote Karte"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
		de: "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288506,
		tcgplayer: 113729
	}
}

export default card
