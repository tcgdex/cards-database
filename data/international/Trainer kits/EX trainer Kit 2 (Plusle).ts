import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-ex-p",

	name: {
		'en-us': "EX trainer Kit 2 (Plusle)",
		'it-it': "EX trainer Kit (Plusle)",
		'fr-fr': "EX Kit dresseur (Positi)",
		'es-es': "Kit de Entrenador EX (Plusle)",
	},

	serie: serie,

	cardCount: {
		official: 12
	},

	releaseDate: "2006-03-01",

	abbreviations: {
		official: "TK2P",
		'fr-fr': "POS"
	},

	thirdParty: {
		tcgplayer: 1542
	}
}

export default set
