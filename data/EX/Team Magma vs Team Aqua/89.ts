import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Blaziken ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 150,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blaze Kick",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Burned.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volcanic Ash",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Blaziken ex and then choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
