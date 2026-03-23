import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Aquali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [134],
	hp: 110,
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
				fr: "Écume",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Water",
				"Fairy",
			],
			name: {
				fr: "Charge",
			},
			damage: "20",
		},
	],
}

export default card
