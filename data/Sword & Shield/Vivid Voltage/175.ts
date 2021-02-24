import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Drapion V",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
			},

			damage: 70,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hazardous Claws",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. Your opponent’s Active Pokémon is now Paralyzed and Poisoned.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
