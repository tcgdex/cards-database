import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Latias δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Super Singe",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 40,

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
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
