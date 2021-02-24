import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Swalot",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gulpin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 50 damage plus 30 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
