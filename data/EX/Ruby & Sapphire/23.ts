import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Swampert",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Remedy",
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Water Energy from your hand to Swampert, remove 1 damage counter from Swampert.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
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
