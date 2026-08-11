import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'de-de': "Mogelbaum"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 80,

	types: [
		"Fighting",
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
				'en-us': "Does 10 damage times the number of damage counters on Sudowoodo.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Simularbre.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Mogelbaum zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Wood Hammer",
				'fr-fr': "Martobois",
				'de-de': "Holzhammer"
			},
			effect: {
				'en-us': "Sudowoodo does 30 damage to itself.",
				'fr-fr': "Simularbre s'inflige 30 dégâts.",
				'de-de': "Mogelbaum fügt sich slebst 30 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It stands along paths pretending to be a tree. If it starts raining, it seems to disappear.",
	},

	thirdParty: {
		cardmarket: 278097,
		tcgplayer: 89595
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
