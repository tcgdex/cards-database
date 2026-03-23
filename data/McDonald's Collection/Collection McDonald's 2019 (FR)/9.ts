import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Tortank",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [9],
	hp: 140,
	types: ["Water"],

	stage: "Stage2",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Crocs Feu",
			},
			damage: "20",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
		},
	],
}

export default card
