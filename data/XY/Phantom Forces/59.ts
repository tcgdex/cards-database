import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Wing",
				fr: "Aile de Fer",
			},
			effect: {
				en: "Discard a Metal Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Metal attachée à ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
