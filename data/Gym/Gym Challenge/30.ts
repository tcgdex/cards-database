import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Golduck",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Damage Shift",
			},
			effect: {
				en: "Move 1 damage counter from each of your Pokémon that has any on it to the Defending Pokémon. (Don't apply Weakness and Resistance.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Spray",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
