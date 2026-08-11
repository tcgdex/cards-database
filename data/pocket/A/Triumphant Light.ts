import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A2a",

	name: {
		'de-de': "Licht des Triumphs",
		'en-us': "Triumphant Light",
		'es-es': "Luz Triunfal",
		'fr-fr': "Lumière Triomphale",
		'it-it': "Luce Trionfale",
		'pt-br': "Luz Triunfante",
		'ko-kr': '초극의 빛'
	},

	serie: serie,

	cardCount: {
		official: 75
	},

	boosters: {
		arceus: {
			name: {
				'en-us': "Arceus"
			}
		}
	},

	releaseDate: "2025-02-28"
}

export default set
