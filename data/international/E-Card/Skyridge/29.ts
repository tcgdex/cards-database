import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'de-de': "Rizeros"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Giant Tail",
				'de-de': "Riesenschweif"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 100,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88729,
				cardmarket: 275257
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88729,
				cardmarket: 275257
			},
		},
	],
}

export default card
