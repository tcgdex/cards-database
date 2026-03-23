import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Noctali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [197],
	hp: 100,
	types: ["Darkness"],

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
				fr: "Gobeur",
			},
			effect: {
				fr: "Piochez 3 cartes.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Souplesse",
			},
			damage: "50x",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
