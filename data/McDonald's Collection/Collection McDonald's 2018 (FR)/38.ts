import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Phyllali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [470],
	hp: 90,
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
				"Colorless",
			],
			name: {
				fr: "Rengorgement",
			},
			effect: {
				fr: "Pendant votre prochain tour, les attaque de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},
			damage: "20",
		},
	],
}

export default card
