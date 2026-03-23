import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Mackogneur",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [68],
	hp: 150,
	types: ["Fighting"],

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
				"Lightning",
			],
			name: {
				fr: "Éclair",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Bec Vrille",
			},
			damage: "120",
		},
	],
}

export default card
