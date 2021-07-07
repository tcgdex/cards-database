import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Tympole",
		fr: "Tritonde",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		535,
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
				en: "Get Loud",
				fr: "Tapageur",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
			},
			effect: {
				en: "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
