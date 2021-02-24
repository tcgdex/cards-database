import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Scizor ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Danger Perception",
			},
			effect: {
				en: "As long as Scizor ex's remaining HP is 60 or less, Scizor ex does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Scizor ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
