import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de flammes",
				'de-de': "Flammenschweif"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy attached to Flareon.",
				'fr-fr': "Défaussez une carte Énergie attachée à Pyroli.",
				'de-de': "Lege 1 an Flamara angelegte Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees Fahrenheit.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85499,
				cardmarket: 279687
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85499,
				cardmarket: 279687
			},
		},
	],

}

export default card
