import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Professor Oak's Research",
		fr: "La recherche du Prof. Chen",
		de: "Prof. Eichs Nachforschungen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Mélangez votre main à votre deck. Ensuite, piochez 5 cartes.",
		de: "Mische deine Handkarten in dein Deck und ziehe dann 5 Karten.",
	},

	thirdParty: {
		cardmarket: 277285,
		tcgplayer: 88404
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
