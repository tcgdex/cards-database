import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A3",

	name: {
		de: "Hüter des Firmaments",
		en: "Celestial Guardians",
		es: "Guardianes Celestiales",
		fr: "Gardiens Astraux",
		it: "Guardiani Astrali",
		'pt-br': "Guardiões Celestiais",
		ko: '쌍천의 수호자'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		solgaleo: {
			name: {
				de: "Solgaleo",
				en: 'Solgaleo',
				fr: 'Solgaleo',
				es: 'Solgaleo',
				it: 'Solgaleo',
				'pt-br': 'Solgaleo',
				ko: '솔가레오'
			}
		},
		lunala: {
			name: {
				de: "Lunala",
				en: 'Lunala',
				fr: 'Lunala',
				es: 'Lunala',
				it: 'Lunala',
				'pt-br': 'Lunala',
				ko: '루나아라'
			}
		}
	},

	releaseDate: "2025-04-30"
}

export default set
