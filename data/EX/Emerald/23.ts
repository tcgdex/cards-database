import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Camerupt",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Flame",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 30 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Singe",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
