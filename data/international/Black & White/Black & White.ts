import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw1: Set = {
	id: "bw1",

	name: {
		'en-us': "Black & White",
		'fr-fr': "Noir & Blanc",
		'es-es': "Negro y Blanco",
		'it-it': "Nero e Bianco",
		'de-de': "Schwarz & Weiß",
		'pt-br': "Black & White"
	},

	serie: serie,
	tcgOnline: "BLW",

	cardCount: {
		official: 114
	},

	releaseDate: "2011-04-25",

	abbreviations: {
		official: "BLW",
		'fr-fr': "N&B"
	},

	thirdParty: {
		cardmarket: 1571,
		tcgplayer: 1400
	}
}

export default bw1
