import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lateral Eggsplosion",
			},
			effect: {
				en: "Flip a number of coins equal to the total number of Energy attached to your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
