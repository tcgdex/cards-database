import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm11: Set = {
	id: "sm11",

	name: {
		'en-us': "Unified Minds",
		'fr-fr': "Harmonie des Esprits",
		'es-es': "Mentes Unidas",
		'it-it': "Sintonia Mentale",
		'de-de': "Bund der Gleichgesinnten",
		'pt-br': "Sintonia Mental "
	},

	serie: serie,
	tcgOnline: "UNM",

	cardCount: {
		official: 236
	},

	releaseDate: "2019-08-02",

	abbreviations: {
		official: "UNM",
		'fr-fr': "HES"
	},

	thirdParty: {
		cardmarket: 2487,
		tcgplayer: 2464
	}
}

export default sm11
