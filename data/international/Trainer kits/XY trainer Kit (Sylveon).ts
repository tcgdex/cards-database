import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-xy-sy",

	name: {
		'en-us': "XY trainer Kit (Sylveon)",
		'it-it': "XY trainer Kit (Sylveon)",
		'fr-fr': "XY Kit du dresseur (Nymphali)",
		'es-es': "Kit de Entrenador XY (Pikachu Enmascarada)",
	},

	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2014-03-12",

	abbreviations: {
		official: "TK6S",
		'fr-fr': "NYM"
	},

	thirdParty: {
		tcgplayer: 1532
	}
}

export default set
