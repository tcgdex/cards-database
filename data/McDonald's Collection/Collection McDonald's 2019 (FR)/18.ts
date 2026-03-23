import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Miaouss",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [52],
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
			cost: [
				"Water",
			],
			name: {
				fr: "Aquaballe",
			},
			damage: "20",
			effect: {
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
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
			damage: "70+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies Eau attachées à ce Pokémon.",
			},
		},
	],
}

export default card
