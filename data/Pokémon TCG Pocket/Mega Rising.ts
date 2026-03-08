import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B1",

	name: {
		en: "Mega Rising"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	releaseDate: "2025-10-30",

	boosters: {
		'mega-gyarados': {
			name: {
				en: 'Mega Gyarados'
			}
		},
		'mega-blaziken': {
			name: {
				en: 'Mega Blaziken'
			}
		},
		'mega-altaria': {
			name: {
				en: 'Mega Altaria'
			}
		}
	}
}

export default set
