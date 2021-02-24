import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Tyranitar ex δ",
	},
	illustrator: "Yusuke Shimada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electromark",
			},
			effect: {
				en: "Put a Shock-wave marker on 1 of your opponent's Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Claws",
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 70 damage plus 20 more damage.",
			},
			damage: 70,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock-wave",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Shock-wave markers on it. That Pokémon is Knocked Out.",
			},

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
