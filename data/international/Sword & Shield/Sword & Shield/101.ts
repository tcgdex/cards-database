import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Sand Spray",
				'fr-fr': "Jet Sableux",
				'es-es': "Rociado de Arena",
				'it-it': "Silicospruzzo",
				'pt-br': "Spray de Areia",
				'de-de': "Sandspray"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads."
	},

	dexId: [343],

	thirdParty: {
		cardmarket: 436624,
		tcgplayer: 208411
	}
}

export default card
