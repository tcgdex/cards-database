import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
