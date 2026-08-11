import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Beginning Door",
		'fr-fr': "Porte de départ",
		'de-de': "Tor des Ursprungs"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for Arceus, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'de-de': "Durchsuche dein Deck nach 1 Arceus-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83777,
				cardmarket: 278954
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278954,
				tcgplayer: 83777
			}
		},
	],

	retreat: 0
}

export default card
