import { Set } from 'models/database/set'
import serie from '../XY'

const xy7: Set = {
	id: "xy7",

	name: {
		'en-us': "Ancient Origins",
		'fr-fr': "Origines Antiques",
		'es-es': "Antiguos Orígenes",
		'it-it': "Antiche Origini",
		'de-de': "Ewiger Anfang",
		'pt-br': "Origens Ancestrais",
		ru: "Древние Истоки"
	},

	serie: serie,
	tcgOnline: "AOR",

	cardCount: {
		official: 98
	},

	releaseDate: "2015-08-12",

	abbreviations: {
		official: "AOR",
		'fr-fr': "ORA"
	},

	thirdParty: {
		cardmarket: 1660,
		tcgplayer: 1576
	}
}

export default xy7
