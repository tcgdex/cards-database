import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Marshtomp",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		259,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mudkip",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
			},
			effect: {
				en: "When you attach a Water Energy from your hand to Marshtomp, remove all Special Conditions from Marshtomp.",
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
				en: "Aqua Sonic",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
			},
			damage: 20,

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
