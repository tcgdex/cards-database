import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B1",

	name: {
		en: "Mega Rising",
		fr: "Méga-Ascension"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	releaseDate: "2025-10-30",

	abbreviations: {
		official: "B1"
	},
	searchAliases: [
		"B1"
	],
	boosters: {
		'mega-gyarados': {
			name: {
				en: 'Mega Gyarados',
				fr: 'Méga-Léviator'
			}
		},
		'mega-blaziken': {
			name: {
				en: 'Mega Blaziken',
				fr: 'Méga-Braségali'
			}
		},
		'mega-altaria': {
			name: {
				en: 'Mega Altaria',
				fr: 'Méga-Altaria'
			}
		}
	}
}

export default set
