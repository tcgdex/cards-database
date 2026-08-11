import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'de-de': "Zubat"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Self-control",
				'fr-fr': "Sang-froid",
				'de-de': "Self-control"
			},
			effect: {
				'en-us': "Zubat can't be Paralyzed.",
				'fr-fr': "Nosferapti ne peut pas être Paralysé.",
				'de-de': "Zubat can't be Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90772,
				cardmarket: 276486
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90772,
				cardmarket: 276486
			},
		},
	],

}

export default card
