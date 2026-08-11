import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'de-de': "Golbat"
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
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Self-control",
				'fr-fr': "Sang-froid",
				'de-de': "Self-control"
			},
			effect: {
				'en-us': "Golbat can't be Paralyzed.",
				'fr-fr': "Nosferalto ne peut pas être Paralysé.",
				'de-de': "Golbat can't be Paralyzed."
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
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale équisante",
				'de-de': "Spiral Drain"
			},

			effect: {
				'en-us': "Remove 1 damage counter from Golbat.",
				'fr-fr': "Retirez à Nosferalto 1 marqueur de dégât.",
				'de-de': "Remove 1 damage counter from Golbat."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85794,
				cardmarket: 276434
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85794,
				cardmarket: 276434
			},
		},
	],

}

export default card
