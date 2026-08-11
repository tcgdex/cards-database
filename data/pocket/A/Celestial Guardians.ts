import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A3",

	name: {
		'de-de': "Hüter des Firmaments",
		'en-us': "Celestial Guardians",
		'es-es': "Guardianes Celestiales",
		'fr-fr': "Gardiens Astraux",
		'it-it': "Guardiani Astrali",
		'pt-br': "Guardiões Celestiais",
		'ko-kr': '쌍천의 수호자'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		solgaleo: {
			name: {
				'de-de': "Solgaleo",
				'en-us': 'Solgaleo',
				'fr-fr': 'Solgaleo',
				'es-es': 'Solgaleo',
				'it-it': 'Solgaleo',
				'pt-br': 'Solgaleo',
				'ko-kr': '솔가레오'
			}
		},
		lunala: {
			name: {
				'de-de': "Lunala",
				'en-us': 'Lunala',
				'fr-fr': 'Lunala',
				'es-es': 'Lunala',
				'it-it': 'Lunala',
				'pt-br': 'Lunala',
				'ko-kr': '루나아라'
			}
		}
	},

	releaseDate: "2025-04-30"
}

export default set
