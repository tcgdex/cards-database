import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dugtrio",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Diglett",
	},



	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Dig",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Mud Bomb",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
