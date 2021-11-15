import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto"
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
				fr: "Sang-froid"
			},
			effect: {
				en: "Golbat can't be Paralyzed.",
				fr: "Nosferalto ne peut pas être Paralysé."
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
				fr: "Spirale équisante"
			},

			effect: {
				en: "Remove 1 damage counter from Golbat.",
				fr: "Retirez à Nosferalto 1 marqueur de dégât."
			},

			damage: 20
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
