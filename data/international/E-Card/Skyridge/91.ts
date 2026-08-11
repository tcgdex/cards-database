import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'de-de': "Rihorn"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [111],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'de-de': "Hornattacke"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'de-de': "Vergeltung"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on Rhyhorn.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Rihorn zu."
			},
			damage: "10×",

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
				tcgplayer: 88739,
				cardmarket: 275349
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88739,
				cardmarket: 275349
			},
		},
	],
}

export default card
