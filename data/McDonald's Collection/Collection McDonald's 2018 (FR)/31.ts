import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Ectoplasma",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [94],
	hp: 130,
	types: ["Psychic"],

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
				"Fairy",
			],
			name: {
				fr: "Vampibaiser",
			},
			damage: "10",
			effect: {
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},
		},
	],
}

export default card
