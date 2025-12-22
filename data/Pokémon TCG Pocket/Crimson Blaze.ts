import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B1a",

	name: {
		de: "Feuerrote Flammen",
		en: "Crimson Blaze",
		es: "Fuego Carmesí",
		fr: "Embrasement Écarlate",
		it: "Fiamme Cremisi",
		'pt-br': "Chama Carmesim",
		ko: '홍련 블레이즈'
	},

	serie: serie,

	cardCount: {
		official: 69 // nice
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
