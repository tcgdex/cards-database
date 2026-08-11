import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",

	dexId: [653],

	description: {
		'en-us': "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit."
	},

	hp: 50,
	types: ["Fire"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet"
		},

		damage: 20
	}],

	name: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295139,
				tcgplayer: 275059
			}
		}
	]
}

export default card

