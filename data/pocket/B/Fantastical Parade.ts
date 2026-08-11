import { Set } from 'models/database/set'
import serie from '../B'

const set: Set = {
	id: "B2",

	name: {
		'de-de': "Traumhafte Parade",
		'en-us': "Fantastical Parade",
		'es-es': "Desfile de Ensueño",
		'fr-fr': "Parade Onirique",
		'it-it': "Parata Fantasmagorica",
		'pt-br': "Desfile Onírico",
		'ko-kr': '몽환 퍼레이드'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		booster: {
			name: {
				'de-de': "Booster",
				'en-us': 'Booster',
				'fr-fr': 'Booster',
				'es-es': 'Booster',
				'it-it': 'Booster',
				'pt-br': 'Booster',
				'ko-kr': 'Booster'
			}
		}
	},

	releaseDate: "2026-01-29"
}

export default set
