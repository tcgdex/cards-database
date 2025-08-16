import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Zapdos",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Random Spark",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thundering Hurricane",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281197,
		tcgplayer: 90722
	}
}

export default card
