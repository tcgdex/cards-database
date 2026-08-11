import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Sabrina's Gengar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pain Amplifier"
			},
			effect: {
				'en-us': "Put a damage counter on each of your opponent's Pokémon has already has any damage counters on it."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Call of the Night"
			},
			effect: {
				'en-us': "Unless this attack Knocks Out the Defending Pokémon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88874,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88874,
				cardmarket: 274150
			}
		}
	],
}

export default card
