import { Set } from 'models/database/set'
import serie from '../A'

const set: Set = {
	id: "A1a",

	name: {
		'de-de': "Mysteriöse Insel",
		'en-us': "Mythical Island",
		'es-es': "La Isla Singular",
		'fr-fr': "L’Île Fabuleuse",
		'it-it': "L'Isola Misteriosa",
		'pt-br': "Ilha Mítica",
		'ko-kr': '환상이 있는 섬'
	},

	serie: serie,

	cardCount: {
		official: 68
	},

	boosters: {
		mew: {
			name: {
				'en-us': "Mew"
			}
		}
	},

	releaseDate: "2024-12-17"
}

export default set
