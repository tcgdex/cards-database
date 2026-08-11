import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Shelgon δ",
		'fr-fr': "Drackhaus δ",
		'de-de': "Draschel"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Shelgon does 10 damage to itself.",
				'fr-fr': "Drackhaus s'inflige 10 dégâts.",
				'de-de': "Draschel fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277243
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
