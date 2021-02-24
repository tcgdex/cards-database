import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Forretress",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Double Metal Ball",
			},
			effect: {
				en: "Put 2 damage counters on each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Backspin",
			},
			effect: {
				en: "After your attack, you may discard 1 Energy card attached to Forretress. If you do, switch Forretress with 1 of your Benched Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
