import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Crawdaunt",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Corphish",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Pinchers",
			},
			effect: {
				en: "As long as Crawdaunt is your Active Pokémon, when any of your Active Pokémon does damage to the Defending Pokémon, the attack does 10 more damage (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
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





}

export default card
