import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [394],
	set: Set,

	name: {
		en: "Prinplup"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piplup",
	},

	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Aqua Shower"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				en: "Brine"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "20+"
		}
	],

	description: {
		en: "It lives alone, away from others. Apparently, every one of them believes it is the most important."
	},

	retreat: 1
}

export default card
