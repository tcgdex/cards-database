import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'de-de': "Schmerbe"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		339,
	],

	hp: 50,

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
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'de-de': "Kaskade"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Barboach.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Barloche.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Schmerbe zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277030,
		tcgplayer: 83728
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
