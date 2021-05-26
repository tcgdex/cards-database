import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jolteon",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thunderous Awakening",
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Water Pokémon in play (both yours and your opponent’s) have no Abilities.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
