import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Umbreon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pursuit",
			},
			effect: {
				en: "During your opponent's next turn, if the Defending Pokémon tries to retreat, do 10 damage to it. (Don't apply Weakness and Resistance.)",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
