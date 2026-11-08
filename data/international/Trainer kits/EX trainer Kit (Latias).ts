import { Set } from 'models/database/set'
import serie from '../Trainer kits'

const set: Set = {
	id: "tk-ex-latia",

	name: {
		'en-us': "EX trainer Kit (Latias)",
		'it-it': "EX trainer Kit (Latias)",
		'de-de': "EX trainer Kit (Latias)",
		'fr-fr': "EX Kit dresseur (Latias)",
		'es-es': "Kit de Entrenador EX (Latias)",
	},

	serie: serie,

	cardCount: {
		official: 10
	},

	releaseDate: "2004-07-01",

	abbreviations: {
		official: "TK1A",
		'fr-fr': "KDA"
	},

	thirdParty: {
		cardmarket: 275771,
		tcgplayer: 1543
	}
}

export default set
