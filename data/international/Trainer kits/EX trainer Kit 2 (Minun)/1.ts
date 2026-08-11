import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			'en-us': "Flare",
			'fr-fr': "Intimidation"
		},
		damage: 20
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge énergétique"
		},
		effect: {
			'en-us': "Arcanine does 10 damage to itself.",
			'fr-fr': "Arcanin s'inflige 10 dégâts."
		},
		damage: 70
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
				cardmarket: 277205,
				tcgplayer: 83583
			}
		},
	],

}

export default card
