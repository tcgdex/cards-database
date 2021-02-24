import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Exeggutor",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sharpshooter",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Flip a number of coins equal to the number of Grass Energy attached to Exeggutor. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
