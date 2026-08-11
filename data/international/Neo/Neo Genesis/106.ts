import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'de-de': "Kampfenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274506,
				tcgplayer: 85434
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274506,
				tcgplayer: 85434
			}
		}
	]
}

export default card
