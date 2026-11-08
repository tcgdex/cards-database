import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Caterpie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [10],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "String Shot"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
		'en-us': "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274834,
				tcgplayer: 84134
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84134,
				cardmarket: 274834
			}
		}
	],

}

export default card
