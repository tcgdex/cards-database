import { Set } from 'models/database/set'
import serie from '../XY'

const xy6: Set = {
	id: "xy6",

	name: {
		'en-us': "Roaring Skies",
		'fr-fr': "Ciel Rugissant",
		'es-es': "Cielos Rugientes",
		'it-it': "Furie Volanti",
		'de-de': "Drachenleuchten",
		'pt-br': "Céus Estrondosos",
		ru: "Грохочущие Небеса"
	},

	serie: serie,
	tcgOnline: "ROS",

	cardCount: {
		official: 108
	},

	releaseDate: "2015-05-06",

	abbreviations: {
		official: "ROS",
		'fr-fr': "CRU"
	},

	thirdParty: {
		cardmarket: 1649,
		tcgplayer: 1534
	}
}

export default xy6
