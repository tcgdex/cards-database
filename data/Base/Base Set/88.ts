import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Professor Oak",
		fr: "Professeur Chen",
		de: "Professor Eich",
		it: "Professore Oak"

	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez-vous de votre main, puis piochez 7 cartes.",
		de: "Entferne alle Karten aus Deiner Hand und ziehe sieben neue Karten.",
		it: "Scarta le carte che hai in mano e pescane altre 7."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273783,
				tcgplayer: 42431
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660118
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	],
}

export default card
