import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Ecrapince",
		'de-de': "Krebscorps"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Corphish.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Ecrapince.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Krebscorps zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-masse",
				'de-de': "Krabbhammer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277033,
		tcgplayer: 84434
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
