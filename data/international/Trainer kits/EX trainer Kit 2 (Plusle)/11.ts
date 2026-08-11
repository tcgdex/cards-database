import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

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
				tcgplayer: 86763
			}
		},
	],

}

export default card
