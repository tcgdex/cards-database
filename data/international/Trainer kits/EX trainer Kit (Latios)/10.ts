import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique"
	},

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
				cardmarket: 275761,
				tcgplayer: 86760
			}
		},
	],

}

export default card
