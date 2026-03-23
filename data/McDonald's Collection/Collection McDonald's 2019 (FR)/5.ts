import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Reptincel",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [5],
	hp: 90,
	types: ["Fire"],

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
				"Grass",
			],
			name: {
				fr: "Balancement Tropical",
			},
			damage: "20+",
			effect: {
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type de carte Énergie de base dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			},
		},
	],
}

export default card
