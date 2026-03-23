import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Spectrum",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [93],
	hp: 70,
	types: ["Psychic"],

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
				"Colorless",
			],
			name: {
				fr: "Os Pesant",
			},
			damage: "40",
			effect: {
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
		},
	],
}

export default card
