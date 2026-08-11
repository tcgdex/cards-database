import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'de-de': "Nasgnet"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [299],
	
	hp: 70,

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
				'en-us': "Harden",
				'de-de': "Härtner"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Nosepass would be damaged by an attack, prevent that attack's damage done to Nosepass if that damage is 30 or less.",
				'de-de': "Wenn Nasgnet während des nächsten Zuges deines Gegners durch einen Angriff 30 oder weniger Schadenspunkte zugefügt wurden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When endangered, it may protect itself by raising its magnetism and drawing iron objects to its body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87803,
				cardmarket: 278941
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278941,
				tcgplayer: 87803
			}
		},
	],

}

export default card
