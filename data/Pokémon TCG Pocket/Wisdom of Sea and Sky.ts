import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A4",

	name: {
		// de: "Mysteriöse Insel",
		en: "Wisdom of Sea and Sky",
		// es: "La Isla Singular",
		fr: "Sagesse Entre Ciel et Mer",
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
				en: 'Lugia',
				fr: 'Lugia'
			}
		},
		'ho-oh': {
			name: {
				en: 'Ho-Oh',
				fr: 'Ho-Oh'
			}
		}
	}
}

export default set
