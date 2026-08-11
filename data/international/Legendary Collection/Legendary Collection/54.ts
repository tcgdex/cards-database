import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Metapod"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [11],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Caterpie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stiffen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Stun Spore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is vulnerable to attack because its shell is soft, exposing its weak and tender body."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274819,
				tcgplayer: 87387
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87387,
				cardmarket: 274819
			}
		}
	],

}

export default card
