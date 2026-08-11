import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'de-de': "Amonitas"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [138],
	
	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Helix Fossil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Collect",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'de-de': "Ziehe 3 Karten"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tickle",
				'de-de': "Spaßkanone"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that was resurrected from a fossil using modern science. It swam in ancient seas."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87861,
				cardmarket: 278942
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278942,
				tcgplayer: 87861
			}
		},
	],

}

export default card
