import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv02",

	name: {
		'de-de': "Entwicklungen in Paldea",
		'en-us': "Paldea Evolved",
		'es-es': "Evoluciones en Paldea",
		'fr-fr': "Évolutions à Paldea",
		'it-it': "Evoluzioni a Paldea",
		'pt-br': "Evoluções em Paldea"
	},

	serie: serie,

	cardCount: {
		official: 193
	},

	releaseDate: "2023-06-09",

	abbreviations: {
		official: "PAL",
		'fr-fr': "EAP"
	},

	thirdParty: {
		cardmarket: 5318,
		tcgplayer: 23120
	}
}

export default set
