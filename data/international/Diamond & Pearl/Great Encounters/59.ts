import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'de-de': "Sengo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Claw",
				'fr-fr': "Griffe coupante",
				'de-de': "Schneidekralle"
			},
			effect: {
				'en-us': "If your opponent has Seviper in play, this attack does 40 damage plus 50 more damage.",
				'fr-fr': "Si votre adversaire a Seviper en jeu, cette attaque inflige 40 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "Wenn dein Gegner Vipitis im Spiel hat, fügt dieser Angriff 40 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has feuded with SEVIPER for many generations. Its sharp claws are its biggest weapons.",
	},

	thirdParty: {
		cardmarket: 277961,
		tcgplayer: 90706
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
