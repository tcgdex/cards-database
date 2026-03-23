import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Grotadmorv",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [89],
	hp: 120,
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
				"Fighting",
			],
			name: {
				fr: "Attaque en Trois Étapes",
			},
			damage: "10×",
			effect: {
				fr: "Lancez 3 pièces. Chaque attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
