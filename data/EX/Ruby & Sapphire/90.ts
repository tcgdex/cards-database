import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d'énergie",
		de: "Energiesuche"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275738,
				tcgplayer: 85237
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275738,
				tcgplayer: 85237
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125123
			}
		}
	],

	retreat: 0
}

export default card
