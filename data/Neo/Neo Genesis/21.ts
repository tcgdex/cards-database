import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Donphan",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Flail",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Donphan.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Rapid Spin",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
