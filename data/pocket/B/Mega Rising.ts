import { Set } from 'models/database/set'
import serie from '../B'

const set: Set = {
	id: "B1",

	name: {
		'en-us': "Mega Rising",
		'fr-fr': "Méga-Ascension"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	releaseDate: "2025-10-30",

	boosters: {
		'mega-gyarados': {
			name: {
				'en-us': 'Mega Gyarados',
				'fr-fr': 'Méga-Léviator'
			}
		},
		'mega-blaziken': {
			name: {
				'en-us': 'Mega Blaziken',
				'fr-fr': 'Méga-Braségali'
			}
		},
		'mega-altaria': {
			name: {
				'en-us': 'Mega Altaria',
				'fr-fr': 'Méga-Altaria'
			}
		}
	}
}

export default set
