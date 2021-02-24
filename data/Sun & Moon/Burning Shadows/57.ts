import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		544,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spin Turn",
				fr: "Tournoyer",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
