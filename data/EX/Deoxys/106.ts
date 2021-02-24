import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Latios Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Light",
			},
			effect: {
				en: "Remove 1 damage counter and all Special Conditions from Latios Star.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Lightning",
			],
			name: {
				en: "Shining Star",
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios Star and this attack does 50 damage plus 100 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
