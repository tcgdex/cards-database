import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Energy Shower",
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
