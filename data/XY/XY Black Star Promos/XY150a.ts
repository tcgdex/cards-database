import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Yveltal EX",
		fr: "Yveltal EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "None",
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
			type: "Fighting",
			value: "-20"
		},
	],

	stage: "Basic",
	retreat: 2
}

export default card
