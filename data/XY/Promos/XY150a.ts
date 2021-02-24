import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Yveltal-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 170,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Evil Ball",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Y Cyclone",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
