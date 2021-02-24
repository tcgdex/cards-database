import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Primeape",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 60,
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
			],
			name: {
				en: "Low Kick",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Rampage",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Primeape. Flip a coin. If tails, Primeape is now Confused (after doing damage).",
			},
			damage: 20,

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
