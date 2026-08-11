import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [193],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Free Flight",
				'fr-fr': "Vol gratuit",
				'de-de': "Freiflug"
			},
			effect: {
				'en-us': "If Yanma has no Energy attached to it, Yanma's Retreat Cost is 0.",
				'fr-fr': "Si aucune carte Énergie n’est attachée à Yanma, son Coût de retraite est de 0.",
				'de-de': "Wenn keine Energie an Yanma angelegt ist, hat Yanma Rückzugskosten von 0."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'de-de': "Taucher"
			},

			damage: 20,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its large eyes can scan 360 degrees. It looks in all directions to seek out insects as its prey."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90688,
				cardmarket: 279614
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279614,
				tcgplayer: 90688
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				tcgplayer: 480524
			}
		},
	],

}

export default card
