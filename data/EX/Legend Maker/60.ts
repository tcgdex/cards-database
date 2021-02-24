import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Omanyte",
	},
	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		138,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Tentacles",
			},
			effect: {
				en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "[Poké-Body] Ancient Tentacles",
			},
			effect: {
				en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
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
