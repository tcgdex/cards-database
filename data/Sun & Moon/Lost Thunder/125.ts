import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 180,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 90,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tackle",
				fr: "Charge de Fer",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
