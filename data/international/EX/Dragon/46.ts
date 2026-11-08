import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'de-de': "Vibrava"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [329],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation",
				'de-de': "Schwebe"
			},
			effect: {
				'en-us': "If Vibrava has any basic Energy cards attached to it, Vibrava's Retreat Cost is 0.",
				'fr-fr': "Si Vibraninf possède des cartes Énergie de base, son Coût de retraite est de 0.",
				'de-de': "Solange mindestens 1 Basis-Energiekarte an Vibrava angelegt ist, betragen die Rückzugskosten von Vibrava 0."
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
				'en-us': "Razor Wing",
				'fr-fr': "Aile tranchante",
				'de-de': "Rasierflügel"
			},

			damage: 20,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90333,
				cardmarket: 275923
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90333,
				cardmarket: 275923
			},
		},
	],

}

export default card
