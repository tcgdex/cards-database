import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Golbat",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Zubat",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Self-control",
			},
			effect: {
				en: "Golbat can't be Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
			},
			effect: {
				en: "Remove 1 damage counter from Golbat.",
			},

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
