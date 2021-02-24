import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Galarian Meowth",
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Stealy Claws",
			},
			effect: {
				en: "Flip 3 coins. If any of them are heads, your opponent reveals their hand. Then, for each heads, discard a Trainer card from your opponent’s hand.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
			},

			damage: 90,

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
