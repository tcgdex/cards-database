import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Blastoise-GX",
	},
	illustrator: "sadaji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Rocket Splash",
			},
			effect: {
				en: "Shuffle any amount of Water Energy from your Pokémon into your deck. This attack does 60 damage for each card you shuffled into your deck in this way.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Giant Geyser-GX",
			},
			effect: {
				en: "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
