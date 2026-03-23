import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Givrali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [471],
	hp: 90,
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
				"Colorless",
			],
			name: {
				fr: "Rapporte",
			},
			effect: {
				fr: "Piochez une carte.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup d'Boule",
			},
			damage: "30",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "En Deux Punch",
			},
			damage: "60+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
		},
	],
}

export default card
