import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A1",

	name: {
		'de-de': "Unschlagbare Gene",
		'en-us': "Genetic Apex",
		'es-es': "Genes Formidables",
		'fr-fr': "Puissance Génétique",
		'it-it': "Geni Supremi",
		'pt-br': "Dominação Genética",
		'ko-kr': '최강의 유전자'
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	boosters: {
		mewtwo: {
			name: {
				'de-de': 'Mewtu',
				'en-us': 'Mewtwo',
				'fr-fr': 'Mewtwo',
				'es-es': 'Mewtwo',
				'it-it': 'Mewtwo',
				'pt-br': 'Mewtwo',
				'ko-kr': '뮤츠'
			}
		},
		charizard: {
			name: {
				'de-de': 'Glurak',
				'en-us': 'Charizard',
				'fr-fr': 'Dracaufeu',
				'es-es': 'Charizard',
				'it-it': 'Charizard',
				'pt-br': 'Charizard',
				'ko-kr': '리자몽'
			}
		},
		pikachu: {
			name: {
				'en-us': 'Pikachu',
				'fr-fr': 'Pikachu',
				'es-es': 'Pikachu',
				'it-it': 'Pikachu',
				'pt-br': 'Pikachu',
				'ko-kr': '피카츄'
			}
		}
	},

	releaseDate: "2024-10-30"
}

export default set
