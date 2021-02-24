import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Galarian Meowth",
	},



	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Claw Dagger",
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
			},
			damage: "80×",

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
