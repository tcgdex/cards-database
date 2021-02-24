import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Arbok",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ekans",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Terror Strike",
			},
			effect: {
				en: "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Fang",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 30,

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
