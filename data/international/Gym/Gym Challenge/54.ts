import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Misty's Dewgong"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [87],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Seel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Ice Throw"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Fighting, this attack's base damage is doubled."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down"
			},
			effect: {
				'en-us': "Misty's Dewgong does 20 damage to itself."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87526,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87526,
				cardmarket: 274322
			}
		},
	],
}

export default card
