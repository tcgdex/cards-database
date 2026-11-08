import { Set } from 'models/database/set'
import serie from '../Black & White'

const bw6: Set = {
	id: "bw6",

	name: {
		'en-us': "Dragons Exalted",
		'fr-fr': "Dragons Éxaltés",
		'es-es': "Dragones Majestuosos",
		'it-it': "Stirpe dei Draghi",
		'de-de': "Hoheit der Drachen",
		'pt-br': "Dragões Enaltecidos"
	},

	serie: serie,
	tcgOnline: "DRX",

	cardCount: {
		official: 124
	},

	releaseDate: "2012-08-15",

	abbreviations: {
		official: "DRX",
		'fr-fr': "DEX"
	},

	thirdParty: {
		cardmarket: 1576,
		tcgplayer: 1394
	}
}

export default bw6
