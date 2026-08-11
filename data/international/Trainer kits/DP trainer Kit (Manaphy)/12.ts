import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau"
	},
	illustrator: "",
	rarity: "None",
	category: "Energy",

	set: Set,
	stage: "Basic",
	energyType: "Normal",
	types: [
		"Water"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278031,
				tcgplayer: 90511
			}
		},
	],

}

export default card
