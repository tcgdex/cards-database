import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'de-de': "Togetic"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Équilibre Plongée",
				'de-de': "Tempohechtsprung"
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
				'en-us': "Sweet Kiss",
				'fr-fr': "Doux baiser",
				'de-de': "Bitterkuss"
			},
			effect: {
				'en-us': "Your opponent may draw a card.",
				'fr-fr': "Votre adversaire peut piocher une carte.",
				'de-de': "Dein Gegner kann 1 Karte ziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said to appear in front of kindly people to scatter a glowing down called \"joy dust.\"",
	},

	thirdParty: {
		cardmarket: 277957,
		tcgplayer: 89943
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
