import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Dracaufeu",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [6],
	hp: 150,
	types: ["Fire"],

	stage: "Stage2",

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
			],
			name: {
				fr: "Roussi",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Plaquage",
			},
			damage: "50",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
}

export default card
