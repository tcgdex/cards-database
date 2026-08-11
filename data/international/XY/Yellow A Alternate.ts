import { Set } from 'models/database/set'
import serie from '../XY'

const xya: Set = {
	id: "xya",

	name: {
		'en-us': "Yellow A Alternate",
		'fr-fr': "carte alternative A Jaune",
		'es-es': "Cartas alternativas",
		'it-it': "Carta Alternatica A Gialla",
		'de-de': "Gelbes-A-Alternativkarten"
	},

	serie: serie,

	cardCount: {
		official: 6
	},

	releaseDate: "2014-02-05",

	thirdParty: {
		tcgplayer: 1938
	}
}

export default xya
