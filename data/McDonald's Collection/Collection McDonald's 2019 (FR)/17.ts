import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Grodoudou",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [40],
	hp: 100,
	types: ["Fairy"],

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
				fr: "Éclaboussure",
			},
			damage: "10+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],
}

export default card
