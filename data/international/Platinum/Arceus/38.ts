import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'de-de': "Reptain"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],
	
	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Treecko"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Detect",
				'de-de': "Scanner"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Reptain zugefügt würden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Blade Arms",
				'de-de': "Klingenarme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in dense jungles. While closing in on its prey, it leaps from branch to branch."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85943,
				cardmarket: 278910
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278910,
				tcgplayer: 85943
			}
		},
	],

}

export default card
