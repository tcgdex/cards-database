import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw4: Set = {
	id: "bw4",

	name: {
		'en-us': "Next Destinies",
		'fr-fr': "Destinées Futures",
		'es-es': "Próximos Destinos",
		'it-it': "Destini Futuri",
		'de-de': "Kommende Schicksale",
		'pt-br': "Próximos Destinos"
	},

	serie: serie,
	tcgOnline: "NXD",

	cardCount: {
		official: 99
	},

	releaseDate: "2012-02-08",

	abbreviations: {
		official: "NXD",
		'fr-fr': "DFU"
	},

	thirdParty: {
		cardmarket: 1574,
		tcgplayer: 1412
	}
}

export default bw4
