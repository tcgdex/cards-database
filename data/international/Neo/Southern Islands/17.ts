import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Vileplume",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Paradise Pollen",
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 2 damage counters from Vileplume (1 if it only has 1). Then, if you have any Benched Pokémon with damage counters on them, choose 1 of them and remove 2 damage counters from it (1 if it only has 1).",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Horrid Pollen",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Confused.",
			},
			damage: 30,

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
		'en-us': "This Pokémon makes a loud jangling noise when it shakes its petals to spread poison powder.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275647,
				tcgplayer: 46474
			}
		}
	]
}

export default card
