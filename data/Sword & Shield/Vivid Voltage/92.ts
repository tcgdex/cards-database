import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Terrakion",
	},
	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Guard Press",
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Earthen Power",
			},
			effect: {
				en: "If you have a Stadium in play, this attack does 80 more damage.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
