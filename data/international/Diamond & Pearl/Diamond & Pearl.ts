import { Set } from 'models/database/set'
import serie from '../Diamond & Pearl'

const dp1: Set = {
	id: "dp1",

	name: {
		'en-us': "Diamond & Pearl",
		'fr-fr': "Diamant & Perle",
		'es-es': "Diamante & Perla",
		'it-it': "Diamante & Perla",
		'de-de': "Diamant & Perl",
		'pt-br': "Diamante & Pérola",
		'pl-pl': 'Diament i Perla'
	},

	serie: serie,
	tcgOnline: "DP",

	cardCount: {
		official: 130
	},

	releaseDate: "2007-05-01",

	abbreviations: {
		official: "DP",
		'fr-fr': "D&P"
	},

	thirdParty: {
		cardmarket: 1555,
		tcgplayer: 1430
	}
}

export default dp1
