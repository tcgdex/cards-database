import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw5: Set = {
	id: "bw5",

	name: {
		'en-us': "Dark Explorers",
		'fr-fr': "Explorateurs Obscurs",
		'it-it': "Esploratori delle Tenebre",
		'de-de': "Erfoscher der Finsternis",
		'es-es': "Oscuros Exploradores",
		'pt-br': "Exploradores da Escuridão"
	},

	serie: serie,
	tcgOnline: "DEX",

	cardCount: {
		official: 108
	},

	releaseDate: "2012-05-09",

	abbreviations: {
		official: "DEX",
		'fr-fr': "EOB"
	},

	thirdParty: {
		cardmarket: 1575,
		tcgplayer: 1386
	}
}

export default bw5
