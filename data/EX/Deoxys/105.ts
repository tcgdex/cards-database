import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Latias Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
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
				en: "Remove 1 damage counter from each of your Pokémon (including Latias Star).",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Fire",
			],
			name: {
				en: "Shooting Star",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, discard all Energy cards attached to Latias Star and this attack does 50 damage plus 100 more damage.",
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
