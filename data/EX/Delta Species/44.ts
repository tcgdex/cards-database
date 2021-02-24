import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Hariyama",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Makuhita",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reversal Aura",
			},
			effect: {
				en: "As long as you have more Prize cards left than your opponent, each of Hariyama's attacks does 20 more damage to the Active Pokémon (before applying Weakness and Resistance) and damage done by the Active Pokémon to Hariyama is reduced by 20 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Slap Push",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Brick Smash",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
