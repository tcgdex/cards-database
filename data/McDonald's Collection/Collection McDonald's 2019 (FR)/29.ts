import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Fantominus",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [92],
	hp: 50,
	types: ["Psychic"],

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
				"Colorless",
			],
			name: {
				fr: "Grincement",
			},
			effect: {
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Frénésie",
			},
			damage: "10+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
		},
	],
}

export default card
