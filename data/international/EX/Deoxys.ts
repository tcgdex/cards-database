import { Set } from 'models/database/set'
import serie from '../EX'

const ex8: Set = {
	id: "ex8",

	name: {
		'en-us': "Deoxys",
		'fr-fr': "EX Deoxys",
		'it-it': "EX Deoxys",
		'de-de': "EX Deoxys",
		'pt-br': "EX Deoxys"
	},

	serie: serie,
	tcgOnline: "DX",

	cardCount: {
		official: 107
	},

	releaseDate: "2005-02-01",

	abbreviations: {
		official: "DX",
		'fr-fr': "DEO"
	},

	thirdParty: {
		cardmarket: 1546,
		tcgplayer: 1404
	}
}

export default ex8
