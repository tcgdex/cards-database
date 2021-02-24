import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Golem-EX",
		fr: "Grolem-EX",
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 180,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
			},

			damage: 80,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Megaton Fall",
				fr: "Chute Mégatonne",
			},
			effect: {
				en: "This Pokémon does 60 damage to itself.",
				fr: "Ce Pokémon s'inflige 60 dégâts.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
