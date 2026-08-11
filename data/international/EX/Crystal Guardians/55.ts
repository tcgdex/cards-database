import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nenupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Aqua Lift",
				'fr-fr': "Aqua-élévation",
				'de-de': "Aquatransporter"
			},
			effect: {
				'en-us': "If Lotad has any Water Energy attached to it, the Retreat Cost for Lotad is 0.",
				'fr-fr': "Si Nenupiot possède une Énergie , son Coût de retraite est de 0.",
				'de-de': "Wenn mindestens 1 -Energie an Loturzel angelegt ist, hat Loturzel Rückzugskosten 0."
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
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-boulé",
				'de-de': "Rolltackle"
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


	retreat: 1,

	thirdParty: {
		cardmarket: 277136,
		tcgplayer: 86835
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
