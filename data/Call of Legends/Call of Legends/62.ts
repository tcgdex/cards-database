import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [126],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon mutant",
				de: "Glühende Kohlen"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Punch",
				fr: "Poing magma",
				de: "Magmahieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		en: "It dislikes cold places, so it blows scorching flames to make the environment suitable for itself.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87052,
				cardmarket: 279705
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87052,
				cardmarket: 279705
			},
		},
	],

}

export default card
