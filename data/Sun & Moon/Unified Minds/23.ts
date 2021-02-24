import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		322,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
