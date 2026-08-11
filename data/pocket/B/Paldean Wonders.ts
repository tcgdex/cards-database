import { Set } from 'models/database/set'
import serie from '../B'

const set: Set = {
	id: "B2a",

	name: {
		'de-de': "Paldean Wonders",
		'en-us': "Paldean Wonders",
		'es-es': "Paldean Wonders",
		'fr-fr': "Merveilles de Paldea",
		'it-it': "Paldean Wonders",
		'pt-br': "Paldean Wonders",
		'ko-kr': "Paldean Wonders",
	},

	serie: serie,

	cardCount: {
		official: 93
	},

	boosters: {
		paldea: {
			name: {
				'de-de': "Paldea",
				'en-us': "Paldea",
				'fr-fr': "Paldea",
				'es-es': "Paldea",
				'it-it': "Paldea",
				'pt-br': "Paldea",
				'ko-kr': "Paldea",
			}
		}
	},		

	releaseDate: "2026-02-26"
}


export default set
