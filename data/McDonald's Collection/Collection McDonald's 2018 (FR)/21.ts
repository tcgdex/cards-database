import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Akwakwak",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [55],
	hp: 100,
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
				fr: "Coup d'Boule",
			},
			damage: "10",
		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Charge Bizarre",
			},
			damage: "60",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
