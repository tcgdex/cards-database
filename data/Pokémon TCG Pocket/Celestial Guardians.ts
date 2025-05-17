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
				en: 'Solgaleo'
			}
		},
		lunala: {
			name: {
				en: 'Lunala'
			}
		}
	},

	releaseDate: "2025-04-30"
}

export default set
