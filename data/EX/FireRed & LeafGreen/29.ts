import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Scyther",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Leaf Ride",
			},
			effect: {
				en: "If Scyther has any Energy attached to it, Scyther's Retreat Cost is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
