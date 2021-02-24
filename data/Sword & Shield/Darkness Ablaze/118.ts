import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Scizor V",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Hack Off",
			},
			effect: {
				en: "Discard a Pokémon Tool and a Special Energy from your opponent’s Active Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
			},

			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
