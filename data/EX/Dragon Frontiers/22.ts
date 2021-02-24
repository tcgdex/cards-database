import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Seadra δ",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Horsea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smokescreen",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
			},

			damage: 40,

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
