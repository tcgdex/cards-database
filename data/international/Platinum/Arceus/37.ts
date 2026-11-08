import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'de-de': "Georok"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [75],
	
	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Geodude"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Graveler does 10 damage to itself.",
				'de-de': "Georok fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It rolls on mountain paths to move. Once it builds momentum, no Pokémon can stop it without difficulty."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85894,
				cardmarket: 278909
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278909,
				tcgplayer: 85894
			}
		},
	],

}

export default card
