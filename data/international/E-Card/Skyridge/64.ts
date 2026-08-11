import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [214],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Angry Horn",
				'de-de': "Wütendes Horn"
			},

			effect: {
				'en-us': "If there are 4 or more damage counters on Heracross, this attack's base damage is 50 instead of 30.",
				'de-de': "Liegen auf Skaraborn 4 oder mehr Schadensmarken, beträgt der Basisschaden dieses Angriffs 50 anstatt 30."
			},

			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86061,
				cardmarket: 275322
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86061,
				cardmarket: 275322
			},
		},
	],
}

export default card
