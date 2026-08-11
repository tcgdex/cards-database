import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fire"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Flame Tail",
			'fr-fr': "Queue de flammes"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
		},
	],

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277200,
				tcgplayer: 85956
			}
		},
	],

}

export default card
