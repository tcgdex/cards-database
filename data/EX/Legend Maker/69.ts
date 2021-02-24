import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wailmer",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		320,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Tackle",
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 30,

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
