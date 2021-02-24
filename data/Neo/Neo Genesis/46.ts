import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quilava",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 60,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
			},
			effect: {
				en: "Discard 1 Energy card attached to Quilava in order to use this attack.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Wind",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
			},
			damage: 20,

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
