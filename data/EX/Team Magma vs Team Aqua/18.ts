import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sharpedo",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slow-Acting Poison",
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Smash",
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

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
