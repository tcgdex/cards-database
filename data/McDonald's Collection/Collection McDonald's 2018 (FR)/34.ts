import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Voltali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Pare-Balles",
			},
			effect: {
				fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				fr: "Dracogriffe",
			},
			damage: "30",
		},
	],
}

export default card
