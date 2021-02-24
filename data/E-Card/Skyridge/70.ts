import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
			},
			effect: {
				en: "All damage done to Kakuna is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 10,

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
