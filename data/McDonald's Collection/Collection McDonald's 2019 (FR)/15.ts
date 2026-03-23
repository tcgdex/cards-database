import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Feunard",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [38],
	hp: 100,
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
				"Colorless",
			],
			name: {
				fr: "Hydrocanon",
			},
			damage: "10+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies Eau attachées à ce Pokémon.",
			},
		},
	],
}

export default card
