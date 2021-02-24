import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Masquerain",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whirlwind",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Silver Wind",
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
			},
			damage: 30,

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
			value: "-30"
		},
	],




}

export default card
