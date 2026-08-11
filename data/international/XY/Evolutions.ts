import { Set } from 'models/database/set'
import serie from '../XY'

const xy12: Set = {
	id: "xy12",

	name: {
		'en-us': "Evolutions",
		'fr-fr': "Évolutions",
		'es-es': "Evoluciones",
		'it-it': "Evoluzioni",
		'de-de': "Evolution",
		'pt-br': "Evoluções"
	},

	serie: serie,
	tcgOnline: "EVO",

	cardCount: {
		official: 108
	},

	releaseDate: "2016-11-02",

	abbreviations: {
		official: "EVO",
		'fr-fr': "EVO"
	},

	thirdParty: {
		cardmarket: 1742,
		tcgplayer: 1842
	}
}

export default xy12
