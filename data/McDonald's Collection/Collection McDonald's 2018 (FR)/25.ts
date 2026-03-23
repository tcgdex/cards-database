import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Machopeur",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [67],
	hp: 90,
	types: ["Fighting"],

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
				"Fighting",
			],
			name: {
				fr: "Coinçage",
			},
			effect: {
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup Déchaîné",
			},
			damage: "30",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
