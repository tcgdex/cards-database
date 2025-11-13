import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A3a",

	name: {
		// de: "Unschlagbare Gene",
		en: "Extradimensional Crisis",
		// es: "Genes Formidables",
		fr: "Crise Interdimensionnelle",
		// it: "Geni Supremi",
		// 'pt-br': "Dominação Genética",
		// ko: '최강의 유전자'
	},

	serie: serie,

	cardCount: {
		official: 69 // ???
	},

	boosters: {
		extradimensional: {
			name: {
				en: "Extradimensional"
			}
		}
	},

	releaseDate: "2025-05-29"
}

export default set
