import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Arcanin",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [59],
	hp: 130,
	types: ["Fire"],

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
				"Fighting",
			],
			name: {
				fr: "Attaque Surprise",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Force",
			},
			damage: "40",
		},
	],
}

export default card
