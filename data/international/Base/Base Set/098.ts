import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'de-de': "Feuerenergie",
		'it-it': "Energia Fuoco",
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
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273793,
				tcgplayer: 42442
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107094
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107094
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
