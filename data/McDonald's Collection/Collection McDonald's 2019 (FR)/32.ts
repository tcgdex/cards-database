import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Évoli",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

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
				fr: "Plaisir Gâché",
			},
			damage: "10+",
			effect: {
				fr: "Si vous jouez en second, cette attaque inflige 60 dégâts supplémentaires pendant votre premier tour.",
			},
		},
	],
}

export default card
