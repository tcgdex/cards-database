import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Caninos",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [58],
	hp: 80,
	types: ["Fire"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [],
			name: {
				fr: "Boul'Armure",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Charge",
			},
			damage: "20",
		},
	],
}

export default card
