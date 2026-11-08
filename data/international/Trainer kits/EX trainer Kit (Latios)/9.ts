import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	name: {
		'en-us': "Energy Search",
		'fr-fr': "Recherche d'énergie"
	},

	illustrator: "Kai Ishikawa",
	rarity: "None",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward",
		'fr-fr': "Cherchez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item",
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275764,
				tcgplayer: 85240
			}
		},
	],

}

export default card
