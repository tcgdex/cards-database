import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Exeggcute",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deflector",
			},
			effect: {
				en: "During your opponent's next turn, whenever Erika's Exeggcute takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Egg Bomb",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing to the Defending Pokémon and Erika's Exeggcute does 20 damage to itself.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
