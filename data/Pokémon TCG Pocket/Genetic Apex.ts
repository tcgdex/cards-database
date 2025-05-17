import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1",

	name: {
		de: "Unschlagbare Gene",
		en: "Genetic Apex",
		es: "Genes Formidables",
		fr: "Puissance Génétique",
		it: "Geni Supremi",
		'pt-br': "Dominação Genética",
		ko: '최강의 유전자'
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	boosters: {
		mewtwo: {
			name: {
				en: 'Mewtwo'
			}
		},
		charizard: {
			name: {
				en: 'Charizard'
			}
		},
		pikachu: {
			name: {
				en: 'Pikachu'
			}
		}
	},

	releaseDate: "2024-10-30"
}

export default set
