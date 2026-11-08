import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Carvanha δ",
		'fr-fr': "Carvanha δ",
		'de-de': "Kanivanha"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,
			cost: ["Colorless"]
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Carvanha does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Carvanha s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Kanivanha selbst 10 Schadenspunkte zu."
			},
			damage: 30,

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
		cardmarket: 277031
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
