import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Erika's Ivysaur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [2],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Bulbasaur"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Relaxing Scent"
			},
			effect: {
				'en-us': "As long as Erika's Ivysaur is your Active Pokémon, whenever an attack (even your own) does damage to any Pokémon (after applying Weakness and Resistance), that attack only does half the damage to that Pokémon (rounded up to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Erika's Ivysaur is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Double Razor Leaf"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85297,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85297,
				cardmarket: 274309
			}
		},
	],
}

export default card
