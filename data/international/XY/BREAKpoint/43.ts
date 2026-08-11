import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'Phalange",
				'es-es': "Puño con Nudillos",
				'it-it': "Nocca-Pugno",
				'pt-br': "Soco com Punho",
				'de-de': "Knöchelhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electroslug",
				'fr-fr': "Électro Frappe",
				'es-es': "Electropuñetazo",
				'it-it': "Elettropugno",
				'pt-br': "Lesma Elétrica",
				'de-de': "Elektroschuss"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It pushes the tips of its two tails against the foe, then lets loose with over 20,000 volts of power.",
	},

	thirdParty: {
		cardmarket: 288218,
		tcgplayer: 111550
	}
}

export default card
