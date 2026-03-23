import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Grodoudou",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [40],
	hp: 100,
	types: ["Fairy"],

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
				fr: "Queue Battoir",
			},
			damage: "10",
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
}

export default card
