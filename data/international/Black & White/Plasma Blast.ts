import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw10: Set = {
	id: "bw10",

	name: {
		'en-us': "Plasma Blast",
		'fr-fr': "Explosion Plasma",
		'de-de': "Plasma-Blaster",
		'pt-br': "Explosão de Plasma" // also "Explosão Plasma" in the PTCGO
	},

	serie: serie,
	tcgOnline: "PLB",

	cardCount: {
		official: 101
	},

	releaseDate: "2013-08-14",

	abbreviations: {
		official: "PLB",
		'fr-fr': "EPL"
	},

	thirdParty: {
		cardmarket: 1580,
		tcgplayer: 1370
	}
}

export default bw10
