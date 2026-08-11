import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

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
	trainerType: "Item",

	effect: {
		'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85241,
				cardmarket: 276740
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85241,
				cardmarket: 276740
			},
		}
	],
}

export default card
