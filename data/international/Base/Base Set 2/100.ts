import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Weedle",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
			},
			effect: {
				'en-us': "Flip a coin. If heads, Defending Pokémon is now Poisoned.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Often found in forests, eating leaves. It has a sharp, venomous stinger on its head.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274023,
				tcgplayer: 42551
			}
		}
	]
}

export default card
