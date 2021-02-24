import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "M Gengar-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 220,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gengar-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Phantom Gate",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
