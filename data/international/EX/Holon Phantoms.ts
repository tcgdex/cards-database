import { Set } from 'models/database/set'
import serie from '../EX'

const ex13: Set = {
	id: "ex13",

	name: {
		'en-us': "Holon Phantoms",
		'fr-fr': "EX Fantômes Holon",
		'it-it': "EX Fantasmi di Holon",
		'de-de': "EX Holon Phantoms"
	},

	serie: serie,
	tcgOnline: "HP",

	cardCount: {
		official: 110
	},

	releaseDate: "2006-05-03",

	abbreviations: {
		official: "HP",
		'fr-fr': "FAN"
	},

	thirdParty: {
		cardmarket: 1551,
		tcgplayer: 1379
	}
}

export default ex13
