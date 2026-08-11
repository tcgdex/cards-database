import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
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
				cardmarket: 274048,
				tcgplayer: 42455
			}
		}
	]
}

export default card
