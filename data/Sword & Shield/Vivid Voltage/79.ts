import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Diancie",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Psychic",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkle Veil",
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your Pokémon take 30 less damage from attacks from your opponent’s Pokémon (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sensitive Ray",
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
