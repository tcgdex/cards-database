import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Kabutops",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Lightning",
			],
			name: {
				en: "Lightning Cut",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Water",
				"Water",
			],
			name: {
				en: "Water Slash",
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance.",
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





}

export default card
