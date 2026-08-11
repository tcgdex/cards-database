import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw3: Set = {
	id: "bw3",

	name: {
		'en-us': "Noble Victories",
		'fr-fr': "Nobles Victoires",
		'es-es': "Nobles Victorias",
		'it-it': "Vittorie Regali",
		'de-de': "Königliche Siege",
		'pt-br': "Vitórias Nobres"
	},

	serie: serie,
	tcgOnline: "NVI",

	cardCount: {
		official: 101
	},

	releaseDate: "2011-11-16",

	abbreviations: {
		official: "NVI",
		'fr-fr': "NVI"
	},

	thirdParty: {
		cardmarket: 1573,
		tcgplayer: 1385
	}
}

export default bw3
