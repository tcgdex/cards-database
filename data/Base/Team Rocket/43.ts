import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Primeape",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 60,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mankey",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Frenzy",
			},
			effect: {
				en: "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Frenzied Attack",
			},
			effect: {
				en: "Dark Primeape is now Confused (after doing damage).",
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
