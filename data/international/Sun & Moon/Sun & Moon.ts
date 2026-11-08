import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm1: Set = {
	id: "sm1",

	name: {
		'en-us': "Sun & Moon",
		'fr-fr': "Soleil et Lune",
		'es-es': "Sol y Luna",
		'it-it': "Sole e Luna",
		'de-de': "Sonne & Mond",
		'pt-br': "Sol e Lua"
	},

	serie: serie,
	tcgOnline: "SUM",

	cardCount: {
		official: 149
	},

	releaseDate: "2017-02-03",

	abbreviations: {
		official: "SUM",
		'fr-fr': "S&L"
	},

	thirdParty: {
		cardmarket: 1745,
		tcgplayer: 1863
	}
}

export default sm1
