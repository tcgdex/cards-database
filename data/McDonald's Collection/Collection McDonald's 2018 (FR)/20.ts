import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Psykokwak",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [54],
	hp: 70,
	types: ["Water"],

	stage: "Basic",

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
				fr: "Roulade",
			},
			damage: "20",
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Électro Impact",
			},
			damage: "40+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
		},
	],
}

export default card
