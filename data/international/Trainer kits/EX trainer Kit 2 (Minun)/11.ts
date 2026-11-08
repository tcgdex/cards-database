import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu"
	},

	illustrator: "",
	rarity: "None",
	category: "Energy",

	set: Set,
	stage: "Basic",
	energyType: "Normal",
	types: [
		"Fire"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85460
			}
		},
	],

}

export default card
