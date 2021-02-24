import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Poliwrath",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Spiral",
			},
			effect: {
				en: "As long as Poliwrath is your Active Pokémon, your opponent's Confused Pokémon can't retreat.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Spiral Punch",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Throw",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
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
