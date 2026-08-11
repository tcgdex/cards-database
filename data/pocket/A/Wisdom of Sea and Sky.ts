import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A4",

	name: {
		// de: "Mysteriöse Insel",
		'en-us': "Wisdom of Sea and Sky",
		// es: "La Isla Singular",
		'fr-fr': "Sagesse Entre Ciel et Mer",
		// it: "L'Isola Misteriosa",
		// 'pt-br': "Ilha Mítica",
		// ko: '환상이 있는 섬'
	},

	serie: serie,

	cardCount: {
		official: 161
	},

	releaseDate: "2025-07-30",

	boosters: {
		lugia: {
			name: {
				'en-us': 'Lugia',
				'fr-fr': 'Lugia'
			}
		},
		'ho-oh': {
			name: {
				'en-us': 'Ho-Oh',
				'fr-fr': 'Ho-Oh'
			}
		}
	}
}

export default set
