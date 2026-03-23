import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Machoc",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [66],
	hp: 70,
	types: ["Fighting"],

	stage: "Basic",

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
				fr: "Électrons Flottants",
			},
			effect: {
				fr: "Si de l'Énergie est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
}

export default card
