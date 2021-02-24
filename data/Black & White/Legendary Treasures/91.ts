import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Cobalion",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Energy Press",
			},
			effect: {
				en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Breaker",
			},
			effect: {
				en: "The Defending Pokémon can't attack during your opponent's next turn.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
