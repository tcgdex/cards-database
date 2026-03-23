import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Raichu",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [26],
	hp: 100,
	types: ["Lightning"],

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
				"Water",
			],
			name: {
				fr: "Pistolet à O",
			},
			damage: "10",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Hydrocanon",
			},
			damage: "30+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies Eau attachées à ce Pokémon.",
			},
		},
	],
}

export default card
