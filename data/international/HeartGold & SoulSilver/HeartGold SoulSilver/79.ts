import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'de-de': "Sandan"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul’armure",
				'de-de': "Einigler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Sandshrew by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à Sabelette par des attaques pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" verhindere alle Schadenspunkte, die Sandan während des nächsten Zuges deines Gegners durch Angriff zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Disliking water, it lives in deep burrows in arid areas. It can roll itself instantly into a ball."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88926,
				cardmarket: 279051
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88926,
				cardmarket: 279051
			}
		},
	],

}

export default card
