import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Psykokwak",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [54],
	hp: 70,
	types: ["Water"],

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
				"Lightning",
			],
			name: {
				fr: "Queue de Fer",
			},
			damage: "20×",
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
