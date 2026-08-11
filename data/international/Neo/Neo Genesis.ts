import { Set } from 'models/database/set'
import serie from '../Neo'

const neo1: Set = {
	id: "neo1",

	name: {
		'en-us': "Neo Genesis",
		'fr-fr': "Neo Genesis",
		'es-es': "Neo Genesis",
		'it-it': "Neo Genesis",
		'de-de': "Neo Genesis"
	},

	serie: serie,
	tcgOnline: "N1",

	cardCount: {
		official: 111
	},

	releaseDate: "2000-12-16",

	abbreviations: {
		official: "N1",
		'fr-fr': "NGS"
	},

	thirdParty: {
		cardmarket: 1531,
		tcgplayer: 1396
	}
}

export default neo1
