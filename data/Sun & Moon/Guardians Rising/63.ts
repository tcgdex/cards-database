import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		66,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamic Chop",
				fr: "Coupe Dynamique",
				es: "Golpe Dinámico",
				it: "Dinamicolpo",
				pt: "Golpe Dinâmico",
				de: "Wuchthieb"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
