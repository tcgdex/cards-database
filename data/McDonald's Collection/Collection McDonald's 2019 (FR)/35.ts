import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Pyroli",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [136],
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
				"Fairy",
			],
			name: {
				fr: "Écras'Face",
			},
			damage: "10",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Berceuse",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
		},
	],
}

export default card
