import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

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
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Double Baffe",
			},
			damage: "30×",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
