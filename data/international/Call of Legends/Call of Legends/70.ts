import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [79],

	hp: 60,

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
				'en-us': "Whismy Tackle",
				'fr-fr': "Charge bizarre",
				'de-de': "Launischer Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It lazes vacantly near water. If something bites its tail, it won't even notice for a whole day.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89334,
				cardmarket: 279713
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89334,
				cardmarket: 279713
			},
		},
	],

}

export default card
