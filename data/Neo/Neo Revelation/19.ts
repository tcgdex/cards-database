import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Kingdra",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Genetic Memory",
			},
			effect: {
				en: "Use any attack from Kingdra's Basic Pokémon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twister",
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose an Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage).",
			},

		},
	],






}

export default card
