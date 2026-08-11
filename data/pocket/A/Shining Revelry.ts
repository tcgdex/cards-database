import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A2b",

	name: {
		'de-de': "Glänzendes Festival",
		'en-us': "Shining Revelry",
		'es-es': "Festival Brillante",
		'fr-fr': "Réjouissances Rayonnantes",
		'it-it': "Tripudio Splendente",
		'pt-br': "Festival Brilhante",
		'ko-kr': '샤이닝 하이'
	},

	serie: serie,

	cardCount: {
		official: 72
	},

	boosters: {
		shining: {
			name: {
				'en-us': "Shining"
			}
		}
	},

	releaseDate: "2025-03-27"
}

export default set
