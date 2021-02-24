import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Dewgong",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dewgong by your opponent's Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Breath",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
