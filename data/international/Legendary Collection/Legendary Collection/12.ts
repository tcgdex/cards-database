import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Gyarados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [130],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Magikarp"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dragon Rage"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubblebeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274777,
				tcgplayer: 85989
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85989,
				cardmarket: 274777
			}
		}
	],

}

export default card
