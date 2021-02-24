import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Medicham",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Meditite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
			},
			effect: {
				en: "As long as Medicham has any Psychic Energy cards attached to it, Medicham is both Psychic and Fighting type.",
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
				en: "Psyshock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
			},
			damage: 50,

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
