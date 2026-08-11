import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Erika's Clefairy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [35],

	hp: 50,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Cleffa"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Moonwatching"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Comet Slap"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85288,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85288,
				cardmarket: 274161
			}
		}
	],
}

export default card

