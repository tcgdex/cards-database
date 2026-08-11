import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Rhydon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhyhorn"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Ram"
			},
			effect: {
				'en-us': "Rhydon does 20 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon. Switch the Pokémon even if Rhydon is Knocked Out.)"
			},
			damage: 50,

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
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Protected by an armor-like hide, it is capable of living in molten lava of 3600 degrees."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274800,
				tcgplayer: 88730
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88730,
				cardmarket: 274800
			}
		}
	],

}

export default card
