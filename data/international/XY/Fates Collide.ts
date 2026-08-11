import { Set } from 'models/database/set'
import serie from '../XY'

const xy10: Set = {
	id: "xy10",

	name: {
		'en-us': "Fates Collide",
		'fr-fr': "Impact des Destins",
		'es-es': "Destinos Enfrentados",
		'it-it': "Destini Incrociati",
		'de-de': "Schicksalsschmiede",
		'pt-br': "Fusão de Destinos"
	},

	serie: serie,
	tcgOnline: "FCO",

	cardCount: {
		official: 124
	},

	releaseDate: "2016-05-02",

	abbreviations: {
		official: "FCO",
		'fr-fr': "IDD"
	},

	thirdParty: {
		cardmarket: 1706,
		tcgplayer: 1780
	}
}

export default xy10
