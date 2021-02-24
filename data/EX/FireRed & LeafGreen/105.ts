import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Charizard ex",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Flame",
			},
			effect: {
				en: "All Energy attached to Charizard ex are Fire Energy instead of its usual type.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Burn Down",
			},
			effect: {
				en: "Discard 5 Fire Energy attached to Charizard ex. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, and any other effects on the Defending Pokémon.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
