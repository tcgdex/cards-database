import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Feebas δ",
		'fr-fr': "Barpau δ",
		'de-de': "Barschwa"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Feebas.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Barpau.",
				'de-de': "Dieser Angriff fügt für jede Schadensmarke auf Barschwa 10 Schadenspunkte zu."
			},
			damage: "10x",

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
		cardmarket: 277254
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
