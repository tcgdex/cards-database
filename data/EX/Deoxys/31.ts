import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
		de: "Golbat"
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
		fr: "Nosferapti"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Self-control",
				fr: "Sang-froid",
				de: "Self-control"
			},
			effect: {
				en: "Golbat can't be Paralyzed.",
				fr: "Nosferalto ne peut pas être Paralysé.",
				de: "Golbat can't be Paralyzed."
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
				fr: "Spirale équisante",
				de: "Spiral Drain"
			},

			effect: {
				en: "Remove 1 damage counter from Golbat.",
				fr: "Retirez à Nosferalto 1 marqueur de dégât.",
				de: "Remove 1 damage counter from Golbat."
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


	retreat: 0,

	thirdParty: {
		tcgplayer: 85794,
		cardmarket: 276434
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
