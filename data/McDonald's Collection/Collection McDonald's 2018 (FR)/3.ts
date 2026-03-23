import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Florizarre",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [3],
	hp: 140,
	types: ["Grass"],

	stage: "Stage2",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Escampette",
			},
			effect: {
				fr: "Pendant votre premier tour, ce Pokémon n'a pas de Coût de Retraite.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Ronge",
			},
			damage: "30",
		},
	],
}

export default card
