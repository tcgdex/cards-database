import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Professor Oak",
		'fr-fr': "Professeur Chen",
		'de-de': "Professor Eich",
		'it-it': "Professore Oak"

	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Discard your hand, then draw 7 cards.",
		'fr-fr': "Défaussez-vous de votre main, puis piochez 7 cartes.",
		'de-de': "Entferne alle Karten aus Deiner Hand und ziehe sieben neue Karten.",
		'it-it': "Scarta le carte che hai in mano e pescane altre 7."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273783,
				tcgplayer: 42431
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107085
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107085
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
