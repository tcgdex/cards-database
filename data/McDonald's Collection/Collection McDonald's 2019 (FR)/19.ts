import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Persian",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [53],
	hp: 90,
	types: ["Colorless"],

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
				fr: "Tornade",
			},
			damage: "30",
		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Glaciation",
			},
			damage: "100",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
		},
	],
}

export default card
