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
				de: 'Mewtu',
				en: 'Mewtwo',
				fr: 'Mewtwo',
				es: 'Mewtwo',
				it: 'Mewtwo',
				'pt-br': 'Mewtwo',
				ko: '뮤츠'
			}
		},
		charizard: {
			name: {
				de: 'Glurak',
				en: 'Charizard',
				fr: 'Dracaufeu',
				es: 'Charizard',
				it: 'Charizard',
				'pt-br': 'Charizard',
				ko: '리자몽'
			}
		},
		pikachu: {
			name: {
				en: 'Pikachu',
				fr: 'Pikachu',
				es: 'Pikachu',
				it: 'Pikachu',
				'pt-br': 'Pikachu',
				ko: '피카츄'
			}
		}
	},

	releaseDate: "2024-10-30"
}

export default set
