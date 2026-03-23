import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

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
				"Lightning",
			],
			name: {
				fr: "Ligotage",
			},
			damage: "10",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
}

export default card
