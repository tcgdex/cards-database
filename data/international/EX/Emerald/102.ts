import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'de-de': "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 85459,
		cardmarket: 276613
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85459,
				cardmarket: 276613
			},
		},
	],
}

export default card
