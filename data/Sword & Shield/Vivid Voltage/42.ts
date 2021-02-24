import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Barraskewda",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Arrokuda",
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Targeted Skewer",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Benched Pokémon for each damage counter on that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
