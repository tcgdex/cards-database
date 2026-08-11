import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1a",

	name: {
		de: "Mysteriöse Insel",
		en: "Mythical Island",
		es: "La Isla Singular",
		fr: "L’Île Fabuleuse",
		it: "L'Isola Misteriosa",
		'pt-br': "Ilha Mítica",
		ko: '환상이 있는 섬'
	},

	serie: serie,

	cardCount: {
		official: 68
	},

	boosters: {
		mew: {
			name: {
				en: "Mew"
			}
		}
	},

	releaseDate: "2024-12-17"
}

export default set
