import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A2b",

	name: {
		de: "Glänzendes Festival",
		en: "Shining Revelry",
		es: "Festival Brillante",
		fr: "Réjouissances Rayonnantes",
		it: "Tripudio Splendente",
		'pt-br': "Festival Brilhante",
		ko: '샤이닝 하이'
	},

	serie: serie,

	cardCount: {
		official: 72
	},

	boosters: {
		shining: {
			name: {
				en: "Shining"
			}
		}
	},

	releaseDate: "2025-03-27"
}

export default set
