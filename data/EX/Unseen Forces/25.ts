import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Hitmonlee",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		106,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
			},
			effect: {
				en: "As long as Hitmonlee is an Evolved Pokémon, Hitmonlee's attacks do 20 more damage to your opponent's Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Stretch Kick",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
			},
			effect: {
				en: "n/a",
			},
			damage: 40,

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
