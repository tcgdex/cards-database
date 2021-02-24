import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Mothim",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		414,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Silver Wind",
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Raging Scales",
			},
			effect: {
				en: "If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
