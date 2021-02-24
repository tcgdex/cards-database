import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Registeel Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Barrier Attack",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Registeel Star by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Final Laser",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like. If your opponent has only 1 Prize card left and Registeel Star is the only Pokémon you have in play, put 6 damage counters instead.",
			},
			damage: 10,

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
