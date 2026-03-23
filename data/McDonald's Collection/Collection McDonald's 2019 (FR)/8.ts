import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Carabaffe",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [8],
	hp: 80,
	types: ["Water"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Empoigne Puissante",
			},
			damage: "20",
			effect: {
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Enfoncement",
			},
			damage: "70",
		},
	],
}

export default card
