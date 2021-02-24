import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
	},
	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clay Curse",
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Clay Pulse",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
