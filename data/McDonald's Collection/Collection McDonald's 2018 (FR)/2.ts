import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

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
				fr: "Doux Parfum",
			},
			effect: {
				fr: "Soignez 30 dégâts à l'un de vos Pokémon.",
			},
		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Trempette",
			},
			damage: "10",
		},
	],
}

export default card
