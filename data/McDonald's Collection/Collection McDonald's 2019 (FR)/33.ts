import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Aquali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [134],
	hp: 110,
	types: ["Water"],

	stage: "Stage1",

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
				fr: "Tête de Fer",
			},
			damage: "10×",
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
