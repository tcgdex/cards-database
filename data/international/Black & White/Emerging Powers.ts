import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw2: Set = {
	id: "bw2",

	name: {
		'en-us': "Emerging Powers",
		'fr-fr': "Pouvoirs Émergents",
		'es-es': "Fuerzas Emergentes",
		'it-it': "Nuove Forze",
		'de-de': "Aufstreben der Mächtigen",
		'pt-br': "Poderes Emergentes"
	},

	serie: serie,
	tcgOnline: "EPO",

	cardCount: {
		official: 98
	},

	releaseDate: "2011-08-31",

	abbreviations: {
		official: "EP",
		'fr-fr': "PEM"
	},

	thirdParty: {
		cardmarket: 1572,
		tcgplayer: 1424
	}
}

export default bw2
