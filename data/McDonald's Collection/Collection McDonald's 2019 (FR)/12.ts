import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Mélofée",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [35],
	hp: 60,
	types: ["Fairy"],

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
				fr: "Combo-Griffe",
			},
			damage: "10×",
			effect: {
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
