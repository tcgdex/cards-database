import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Cheerleader's Cheer",
		fr: "Encouragements hystériques",
		de: "Cheerleader-Jubel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		de: "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen.",
		fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
	},

	thirdParty: {
		cardmarket: 279719,
		tcgplayer: 84247
	}
}

export default card
