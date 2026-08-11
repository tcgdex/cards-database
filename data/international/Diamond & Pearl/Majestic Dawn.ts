import { Set } from 'models/database/set'
import serie from '../Diamond & Pearl'

const dp5: Set = {
	id: "dp5",

	name: {
		'en-us': "Majestic Dawn",
		'fr-fr': "Aube Majestueuse",
		'it-it': "Alba Suprema",
		'de-de': "Majestätischer Morgen"
	},

	serie: serie,
	tcgOnline: "MD",

	cardCount: {
		official: 100
	},

	releaseDate: "2008-05-01",

	abbreviations: {
		official: "MD",
		'fr-fr': "AMJ"
	},

	thirdParty: {
		cardmarket: 1559,
		tcgplayer: 1390
	}
}

export default dp5
