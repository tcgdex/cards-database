import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Fearow",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Wing Attack",
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 20 more damage.",
			},
			damage: 30,

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
