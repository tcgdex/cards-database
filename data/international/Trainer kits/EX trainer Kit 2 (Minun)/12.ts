import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique"
	},

	illustrator: "",
	rarity: "None",
	category: "Energy",

	set: Set,
	stage: "Basic",
	energyType: "Normal",
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277196,
				tcgplayer: 86764
			}
		},
	],

}

export default card
