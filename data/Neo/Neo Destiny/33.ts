import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Exeggutor",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 60,
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
				en: "Triple Headbutt",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "MAX Burst",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

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
