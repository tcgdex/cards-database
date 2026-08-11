import { Set } from 'models/database/set'
import serie from '../EX'

const ex9: Set = {
	id: "ex9",

	name: {
		'en-us': "Emerald",
		'fr-fr': "EX Émeraude",
		'de-de': "EX Smaragd",
		'it-it': "EX Smeraldo",
		'pt-br': "EX Esmeralda"
	},

	serie: serie,
	tcgOnline: "EM",

	cardCount: {
		official: 106
	},

	releaseDate: "2005-05-09",

	abbreviations: {
		official: "EM",
		'fr-fr': "EME"
	},

	thirdParty: {
		cardmarket: 1547,
		tcgplayer: 1410
	}
}

export default ex9
