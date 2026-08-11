import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'de-de': "Krebscorps"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [341],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-masse",
				'de-de': "Krabbhammer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sharp Pincers",
				'fr-fr': "Pinces pointues",
				'de-de': "Scharfe Scheren"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its hardy vitality enables it to adapt to any environment. Its pincers will never release prey."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84436,
				cardmarket: 278791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278791,
				tcgplayer: 84436
			}
		},
	],

}

export default card
