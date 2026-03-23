import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Phyllali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [470],
	hp: 90,
	types: ["Grass"],

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
				fr: "Pirouette Apaisante",
			},
			effect: {
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Gifle Cordiale",
			},
			damage: "100",
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts avant que cette attaque n'inflige des dégâts, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
