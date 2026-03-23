import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Mentali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [196],
	hp: 90,
	types: ["Psychic"],

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
				"Colorless",
			],
			name: {
				fr: "Blessure Pansée",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts à l'un de vos Pokémon.",
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
				fr: "Enfoncement",
			},
			damage: "80",
		},
	],
}

export default card
