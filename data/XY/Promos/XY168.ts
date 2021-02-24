import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "M Garchomp-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 210,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Garchomp-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Crimson Edge",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself for each damage counter on it.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
