import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Mélodelfe",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [36],
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
				fr: "Atterrissage",
			},
			effect: {
				fr: "Soignez 30 dégâts à ce Pokémon. Il ne peut pas battre en retraite pendant votre prochain tour.",
			},
		},
	],
}

export default card
