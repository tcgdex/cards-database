import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Sudowoodo",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mimic",
			},
			effect: {
				en: "As long as Sudowoodo is your Active Pokémon, it copies all of the Defending Pokémon's attacks, including their costs. This power can't be used if Sudowoodo is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
