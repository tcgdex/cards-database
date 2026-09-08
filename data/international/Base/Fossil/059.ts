import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Energy Search",
		'fr-fr': "Recherche d'Énergie",
		'de-de': "Energiesuche"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a basic Energy card and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez une carte Énergie de base dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck.",
		'de-de': "Search your deck for a basic Energy card, reveal it, and put it into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273920,
				tcgplayer: 44461
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273920,
				tcgplayer: 44461
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
