import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Primeape",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mankey",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
			},
			effect: {
				en: "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sudden Charge",
			},
			effect: {
				en: "Primeape does 10 damage to itself. Then, switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
