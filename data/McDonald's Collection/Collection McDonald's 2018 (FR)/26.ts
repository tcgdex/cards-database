import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Mackogneur",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [68],
	hp: 150,
	types: ["Fighting"],

	stage: "Stage2",

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
				fr: "Double Pied",
			},
			damage: "30×",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
