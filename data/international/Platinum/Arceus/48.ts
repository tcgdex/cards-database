import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'de-de': "Draschel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [372],
	
	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bagon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scrunch",
				'de-de': "Zähneknirschen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der Draschel im nächsten Zug deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Bump",
				'de-de': "Drachenrempler"
			},
			effect: {
				'en-us': "If Shelgon has any basic Fire Energy and any basic Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
				'de-de': "Wenn mindestens 1 -Basis-Energiekarte und 1 -Basis-Energiekarte an Draschel angelegt sind, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Within its rugged shell, its cells have begun changing. The shell peels off the instant it evolves."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89129,
				cardmarket: 278920
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278920,
				tcgplayer: 89129
			}
		},
	],

}

export default card
