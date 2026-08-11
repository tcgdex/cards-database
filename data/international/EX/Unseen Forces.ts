import { Set } from 'models/database/set'
import serie from '../EX'

const ex10: Set = {
	id: "ex10",

	name: {
		'en-us': "Unseen Forces",
		'fr-fr': "EX Forces Cachées",
		'es-es': "EX Fuerzas Ocultas",
		'it-it': "EX Forze Segrete",
		'de-de': "EX Verborgene Mächte",
		'pt-br': "EX Forças Ocultas"
	},

	serie: serie,
	tcgOnline: "UF",

	cardCount: {
		official: 115
	},

	releaseDate: "2005-08-22",

	abbreviations: {
		official: "UF",
		'fr-fr': "FCH"
	},

	thirdParty: {
		cardmarket: 1548,
		tcgplayer: 1398
	}
}

export default ex10
