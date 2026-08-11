import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},
	illustrator: "kawayoo",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pulse Blast",
				'fr-fr': "Explosion vibrante",
				'es-es': "Pulso explosivo",
				'it-it': "Scoppimpulso",
				'pt-br': "Pulso Explosivo",
				'de-de': "Pulsierender Schuss"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land’s Wrath",
				'fr-fr': "Force Chtonienne",
				'es-es': "Fuerza Telúrica",
				'it-it': "Forza Tellurica",
				'pt-br': "Ira da Terra",
				'de-de': "Bodengewalt"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "This is Zygarde's form at times when it uses its overwhelming power to suppress those who endanger the ecosystem.",
	},
}

export default card
