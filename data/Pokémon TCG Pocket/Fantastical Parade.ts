import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B2",

	name: {
		de: "Traumhafte Parade",
		en: "Fantastical Parade",
		es: "Desfile de Ensueño",
		fr: "Parade Onirique",
		it: "Parata Fantasmagorica",
		'pt-br': "Desfile Onírico",
		ko: '몽환 퍼레이드'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		booster: {
			name: {
				de: "Booster",
				en: 'Booster',
				fr: 'Booster',
				es: 'Booster',
				it: 'Booster',
				'pt-br': 'Booster',
				ko: 'Booster'
			}
		}
	},

	releaseDate: "2026-01-29"
}

export default set
