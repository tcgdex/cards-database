import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Omanyte",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		138,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Water of Evolution",
			},
			effect: {
				en: "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
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
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
