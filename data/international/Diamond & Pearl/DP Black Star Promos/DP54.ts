import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Beginning Door",
		'fr-fr': "Porte de départ",
		'de-de': "Tor des Ursprungs"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for Arceus, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez Arceus dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Durchsuche dein Deck nach 1 Arceus-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
