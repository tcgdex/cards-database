import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Grotadmorv",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [89],
	hp: 120,
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
			],
			name: {
				fr: "Aiguisage",
			},
			effect: {
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Tranche de ce Pokémon sont de 80.",
			},
		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Tranche",
			},
			damage: "20",
		},
	],
}

export default card
