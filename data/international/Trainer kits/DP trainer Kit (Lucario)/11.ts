import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat"
	},
	illustrator: "",
	rarity: "None",
	category: "Energy",

	set: Set,
	stage: "Basic",
	energyType: "Normal",
	types: [
		"Fighting"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278029,
				tcgplayer: 85443
			}
		},
	],

}

export default card
