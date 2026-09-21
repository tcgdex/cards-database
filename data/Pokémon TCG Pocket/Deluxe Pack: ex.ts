import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A4b",

	name: {
		// de: "Hüter des Firmaments",
		en: "Deluxe Pack: ex",
		// es: "Guardianes Celestiales",
		// fr: "Gardiens Astraux",
		// it: "Guardiani Astrali",
		// 'pt-br': "Guardiões Celestiais",
		// ko: '쌍천의 수호자',
		ja: 'ハイクラスパックex'
	},

	serie: serie,

	cardCount: {
		official: 353
	},

	boosters: {
		deluxe_pack_ex: {
			name: {
				// de: "Solgaleo",
				en: 'Delux Pack EX',
				// fr: 'Solgaleo',
				// es: 'Solgaleo',
				// it: 'Solgaleo',
				// 'pt-br': 'Solgaleo',
				// ko: '솔가레오'
			}
		}
	},

	releaseDate: "2025-09-30"
}

export default set
