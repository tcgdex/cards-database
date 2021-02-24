import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Gyarados",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flame Vapor",
			},
			effect: {
				en: "When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon's Vengeance",
			},
			effect: {
				en: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
