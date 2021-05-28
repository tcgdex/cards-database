import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dodrio",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fast Feet",
			},
			effect: {
				en: "Dodrio can retreat even when it is Asleep or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Retaliate",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Dodrio.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
