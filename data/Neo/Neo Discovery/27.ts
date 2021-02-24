import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Politoed",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Frog Song",
			},
			effect: {
				en: "Whenever Politoed's attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent's), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 times the number of heads.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
