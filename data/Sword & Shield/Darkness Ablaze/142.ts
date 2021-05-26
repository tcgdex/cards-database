import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Delcatty",
	},
	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivating Tail",
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
