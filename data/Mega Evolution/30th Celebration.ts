import { Set } from '../../interfaces'
import serie from '../Mega Evolution'

const set: Set = {
	id: "30C",

	name: {
		en: "30th Celebration",
		fr: '30ᵉ Anniversaire',
		de: '30 Jahre',
		it: '30° Anniversario',
		pt: 'Celebração de 30 Anos',
		es: 'Celebración 30.º Aniversario',
		'es-mx': 'Celebración 30.º Aniversario'
	},

	serie: serie,

	cardCount: {
		official: 128
	},

	subsets: {
		CC: {
			name: {
				en: "Classic Collection",
				fr: "Collection Classique",
				de: "Klassische Kollektion",
				it: "Collezione Classica",
				pt: "Coleção Clásica",
				es: "Colección Clásica",
				'es-mx': "Colección Clásica"
			},
			cardCount: {
				official: 30
			}
		}
	},

	releaseDate: "2026-09-16",

	abbreviations: {
		official: "30C",
		fr: "ME05.5"
	}
}

export default set
