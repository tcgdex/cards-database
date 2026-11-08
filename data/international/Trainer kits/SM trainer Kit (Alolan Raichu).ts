import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-sm-r",

	name: {
		'en-us': "SM trainer Kit (Alolan Raichu)",
		'it-it': "Sole e Luna trainer Kit (Alolan Raichu)",
		'fr-fr': "SM Kit du dresseur (Raichu d'Alola)",
		'es-es': "Kit de Entrenador Sol y Luna (Raichu de Alola)"
	},

	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2017-04-21",

	abbreviations: {
		official: "TK10A",
		'fr-fr': "RAL"
	},

	thirdParty: {
		tcgplayer: 2069
	}
}

export default set
