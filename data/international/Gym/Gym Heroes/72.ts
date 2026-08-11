import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock's Sandshrew"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Sand Pit"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83982,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83982,
				cardmarket: 274151
			}
		}
	],
}

export default card

