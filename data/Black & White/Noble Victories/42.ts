import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		618,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
