import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "HiRON",
	category: "Pokemon",

	dexId: [175],

	description: {
		'en-us': "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up."
	},

	hp: 40,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sweet Kiss",
			'fr-fr': "Doux Baiser"
		},

		damage: 10,

		effect: {
			'en-us': "Your opponent draws a card."
		}
	}],

	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295145,
				tcgplayer: 275065
			}
		}
	]
}

export default card

