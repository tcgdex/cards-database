import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'de-de': "Blanas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Self Charge",
				'fr-fr': "Auto-chargement",
				'de-de': "Selbstaufladung"
			},
			effect: {
				'en-us': "Attach a Darkness Energy card from your hand to Nuzleaf.",
				'fr-fr': "Attachez une carte Énergie  de votre main à Pifeuil.",
				'de-de': "Lege eine -Energiekarte von deiner Hand an Blanas an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing en tire-bouchon",
				'de-de': "Korkenzieherhieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277120,
		tcgplayer: 87823
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
