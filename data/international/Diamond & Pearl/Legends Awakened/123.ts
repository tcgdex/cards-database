import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcracrin",
		'de-de': "Quiekel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 60,

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
				'en-us': "Sniff Out",
				'fr-fr': "Flairer",
				'de-de': "Rumschnüffeln"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez n'importe quelle carte de votre pile de défausse dans votre main.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Karte aus deinem Ablagestapel und nimm sie auf deine Hand."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'de-de': "Sprungangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It loves eating mushrooms that grow under dead grass. It also finds hot springs while foraging.",
	},

	thirdParty: {
		cardmarket: 278272,
		tcgplayer: 89703
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
