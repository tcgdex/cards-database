import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'de-de': "Seemops"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
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
				'en-us': "Defense Curl",
				'fr-fr': "Boul'armure",
				'de-de': "Einigler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Spheal during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Obalie lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der Seemops während des nächsten Zuges deines Gegners zugefügt wird."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde boréale",
				'de-de': "Aurorastrahl"
			},

			damage: 20,

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
		cardmarket: 277371,
		tcgplayer: 89447
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

