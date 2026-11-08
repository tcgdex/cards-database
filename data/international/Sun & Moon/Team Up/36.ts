import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d’Alola",
		'es-es': "Graveler de Alola",
		'it-it': "Graveler di Alola",
		'pt-br': "Graveler de Alola",
		'de-de': "Alola-Georok"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
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

			damage: 100,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When two Graveler fight each other, it fills the surroundings with flashes of light and sound. People call it the \"fireworks of the earth.\"",
	},

	thirdParty: {
		cardmarket: 368967,
		tcgplayer: 183809
	}
}

export default card
