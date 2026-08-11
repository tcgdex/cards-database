import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A3b",

	name: {
		// de: "Hüter des Firmaments",
		'en-us': "Eevee Grove",
		// es: "Guardianes Celestiales",
		'fr-fr': "La Clairière d'Évoli",
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
				'en-us': "Eevee"
			}
		}
	},

	releaseDate: "2025-06-26"
}

export default set
