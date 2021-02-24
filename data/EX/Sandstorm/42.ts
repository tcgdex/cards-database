import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lileep",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		345,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Root Fossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Influence",
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, take the highest Stage Evolution card on that Pokémon and have your opponent shuffle it into his or her deck.",
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
