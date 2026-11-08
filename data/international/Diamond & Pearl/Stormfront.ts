import { Set } from 'models/database/set'
import serie from '../Diamond & Pearl'

const dp7: Set = {
	id: "dp7",

	name: {
		'en-us': "Stormfront",
		'fr-fr': "Tempête",
		'es-es': "Frente Tormentoso",
		'it-it': "Fronte di Tempesta",
		'de-de': "Sturmtief"
	},

	serie: serie,
	tcgOnline: "SF",

	cardCount: {
		official: 100
	},

	releaseDate: "2008-11-01",

	abbreviations: {
		official: "SF",
		'fr-fr': "TEM"
	},

	thirdParty: {
		cardmarket: 1561,
		tcgplayer: 1369
	}
}

export default dp7
