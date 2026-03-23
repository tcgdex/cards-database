import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Akwakwak",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [55],
	hp: 100,
	types: ["Water"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Surf Caudal",
			},
			effect: {
				fr: "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Psyko",
			},
			damage: "70+",
			effect: {
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
			},
		},
	],
}

export default card
