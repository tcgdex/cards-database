import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Wartortle",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Squirtle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Water Gun",
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Water Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When attacked, this Pokémon withdraws into its shell, although it can't quite pull in all of its long tail.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275645,
				tcgplayer: 46472
			}
		}
	]
}

export default card
