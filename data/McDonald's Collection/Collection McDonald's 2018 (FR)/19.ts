import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Persian",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [53],
	hp: 90,
	types: ["Colorless"],

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
				fr: "Sonde Lumineuse",
			},
			effect: {
				fr: "Regardez l'une de vos cartes Récompense (actuellement face cachée).",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Boule Élek",
			},
			damage: "30",
		},
	],
}

export default card
