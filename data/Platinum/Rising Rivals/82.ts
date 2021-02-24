import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Spheal",
		fr: "Obalie Niv. 18",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		363,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'glace",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
