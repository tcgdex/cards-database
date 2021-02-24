import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Mantine δ",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		226,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Circulation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Mantine. This power can't be used if Mantine is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spiral Drain",
			},
			effect: {
				en: "Remove 1 damage counter from Mantine.",
			},
			damage: 10,

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
