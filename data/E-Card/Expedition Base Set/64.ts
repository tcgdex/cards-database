import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Typhlosion",
	},
	illustrator: "Hiroaki Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Thermal Blast",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon, if any. (Don't apply Weakness and Resistance for Benched Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
