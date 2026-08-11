import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'de-de': "Chelast"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [387],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Coquill-attaque",
				'de-de': "Muschelangriff"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "The shell on its back is made of soil. On a very healthy Turtwig, the shell should feel moist."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90079,
				cardmarket: 278822
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278822,
				tcgplayer: 90079
			}
		},
	],

}

export default card
