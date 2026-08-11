import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Snorlax",
	},
	illustrator: "Craig Turvey",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Guard",
			},
			effect: {
				'en-us': "As long as Snorlax is your Active Pokémon, the Defending Pokémon can't retreat. This power stops working when Snorlax is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Roll Over",
			},
			effect: {
				'en-us': "Snorlax is now Asleep. Flip a coin, If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 4,


	description: {
		'en-us': "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89385
			},
		}
	]
}

export default card
