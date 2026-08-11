import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A3b",

	name: {
		// de: "Hüter des Firmaments",
		en: "Eevee Grove",
		// es: "Guardianes Celestiales",
		fr: "La Clairière d'Évoli",
		// it: "Guardiani Astrali",
		// 'pt-br': "Guardiões Celestiais",
		// ko: '쌍천의 수호자'
	},

	serie: serie,

	cardCount: {
		official: 69
	},

	boosters: {
		eevee: {
			name: {
				en: "Eevee"
			}
		}
	},

	releaseDate: "2025-06-26"
}

export default set
