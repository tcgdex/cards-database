import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-sm-l",

	name: {
		'en-us': "SM trainer Kit (Lycanroc)",
		'it-it': "Sole e Luna trainer Kit (Lycanroc)",
		'fr-fr': "SM Kit du dresseur (Lougarox)",
		'es-es': "Kit de Entrenador Sol y Luna (Lycanroc)"
	},

	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2017-04-21",

	abbreviations: {
		official: "TK10L",
		'fr-fr': "LOU"
	},

	thirdParty: {
		tcgplayer: 2069
	}
}

export default set
