import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Beginning Door",
		fr: "Porte de départ",
		de: "Tor des Ursprungs"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for Arceus, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach 1 Arceus-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278954
	}
}

export default card
