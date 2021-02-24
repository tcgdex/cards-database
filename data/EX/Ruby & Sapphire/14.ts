import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Wailord",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
			},
			effect: {
				en: "Wailord does 20 damage to itself.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
			},

			damage: 70,

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
