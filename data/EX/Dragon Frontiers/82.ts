import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste télé",
		de: "TV Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Piochez 3 cartes. Ensuite, défaussez n'importe quelle carte de votre main.",
		de: "Ziehe 3 Karten. Lege danach 1 Karte von deiner Hand auf deinen Ablagestapel.",
	},

	thirdParty: {
		cardmarket: 277287,
		tcgplayer: 90085
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
	]
}

export default card
