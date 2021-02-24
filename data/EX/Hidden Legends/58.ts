import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Clamperl",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		366,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
			},
			effect: {
				en: "Any damage done to Clamperl by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

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
