import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Electabuzz",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Swift",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
