import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Flygon ex δ",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Damage",
			},
			effect: {
				en: "As long as Flygon ex is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Pulse",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 80,

		},
	],






}

export default card
