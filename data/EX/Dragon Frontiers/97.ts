import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Rayquaza ex δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rage Aura",
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, the attack cost of Rayquaza ex's Special Circuit is now Lightning and Rayquaza ex's Sky-high Claws is now Lightning Lightning.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Special Circuit",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If you choose a Pokémon that has any Poké-Powers or Poké-Bodies, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky-high Claws",
			},

			damage: 70,

		},
	],






}

export default card
