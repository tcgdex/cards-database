import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Energy Search",
		'fr-fr': "Recherche d'énergie",
		'de-de': "Energiesuche"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'de-de': "Durchsuche dein Deck nach einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85238,
				cardmarket: 275028
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85238,
				cardmarket: 275028
			},
		},
	],
}

export default card
