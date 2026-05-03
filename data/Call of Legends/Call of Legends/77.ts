import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		de: "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners. Ziehe ebenso viele Karten.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes de la main de votre adversaire.",
	},

	thirdParty: {
		cardmarket: 279720,
		tcgplayer: 84428
	}
}

export default card
