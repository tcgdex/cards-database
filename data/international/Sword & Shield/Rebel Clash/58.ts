import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [125],

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'Phalange",
				'es-es': "Puño con Nudillos",
				'it-it': "Noccapugno",
				'pt-br': "Soco com Punho",
				'de-de': "Knöchelhieb"
			},

			damage: 10,

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

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "While it's often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457723,
				tcgplayer: 213139
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457723,
				tcgplayer: 213139
			}
		},
	],
}

export default card
