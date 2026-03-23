import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

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
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Cru-Aile",
			},
			damage: "70",
		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Piqué",
			},
			damage: "150",
			effect: {
				fr: "Lancez une pièce. SI c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
