import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Lapras",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 70,

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
				'en-us': "Gentle Song",
			},
			effect: {
				'en-us': "If Lapras has any damage counters on it, remove 2 of them from it (1 if it only has 1). If the Defending Pokémon has any damage counters on it, remove 2 of them from it (1 if it only has 1). The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Ice Beam",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
		'en-us': "This gentle Pokémon can understand human language and allows people to ride on its back.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275642,
				tcgplayer: 46469
			}
		}
	]
}

export default card
