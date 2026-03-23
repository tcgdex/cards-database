import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Herbizarre",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [2],
	hp: 80,
	types: ["Grass"],

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
				fr: "Attaque Surprise",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
