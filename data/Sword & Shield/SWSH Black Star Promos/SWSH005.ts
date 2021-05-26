import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Miaouss VMAX",
		en: "Meowth VMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 300,
	types: [
		"Colorless",
	],
	evolveFrom: {
		fr: "Miaouss-V",
		en: "Meowth V"
	},
	stage: "VMAX",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pactole G-Max",
				en: "G-Max Gold Rush"
			},
			effect: {
				fr: "Piochez 3 cartes.",
				en: "Draw 3 cards."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
