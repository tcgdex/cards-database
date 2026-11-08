import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm4: Set = {
	id: "sm4",

	name: {
		'en-us': "Crimson Invasion",
		'fr-fr': "Invasion Carmin",
		'es-es': "Invasión Carmesí",
		'it-it': "Invasione Scarlatta",
		'de-de': "Aufziehen der Sturmröte",
		'pt-br': "Invasão Carmim"
	},

	serie: serie,
	tcgOnline: "CIN",

	cardCount: {
		official: 111
	},

	releaseDate: "2017-11-03",

	abbreviations: {
		official: "CIN",
		'fr-fr': "INC"
	},

	thirdParty: {
		cardmarket: 1843,
		tcgplayer: 2071
	}
}

export default sm4
