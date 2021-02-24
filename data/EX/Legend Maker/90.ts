import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Regice Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Barrier",
			},
			effect: {
				en: "Prevent all effects of an attack, including damage, done to Regice Star by your opponent's Pokémon-ex during your opponent's next turn.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Final Blizzard",
			},
			effect: {
				en: "If your opponent has only 1 Prize card left and Regice Star is the only Pokémon you have in play, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
