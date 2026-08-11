import { Set } from 'models/database/set'
import serie from '../Base'

const base3: Set = {
	id: "base3",

	name: {
		'en-us': "Fossil",
		'fr-fr': "Fossile",
		'es-es': "Fósil",
		'it-it': "Fossil",
		'de-de': "Fossil",
		'pt-br': "Fóssil",
		'nl-nl': "Fossiel"
	},

	serie: serie,
	tcgOnline: "FO",

	cardCount: {
		official: 62
	},

	releaseDate: "1999-10-10",

	abbreviations: {
		official: "FO",
		'fr-fr': "FOS"
	},

	thirdParty: {
		cardmarket: 1526,
		tcgplayer: 630
	}
}

export default base3
