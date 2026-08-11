import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'de-de': "Glutexo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [5],
	
	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmander"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Punch",
				'de-de': "Feuerschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84233,
				cardmarket: 278907
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278907,
				tcgplayer: 84233
			}
		},
	],

}

export default card
