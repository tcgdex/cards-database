import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const det1: Set = {
	id: "det1",

	name: {
		'en-us': "Detective Pikachu",
		'fr-fr': "Détective Pikachu",
		'es-es': "Detective Pikachu",
		'it-it': "Detective Pikachu",
		'de-de': "Meisterdetektiv Pikachu",
		'pt-br': "Detetive Pikachu"
	},

	serie: serie,
	tcgOnline: "DET",

	cardCount: {
		official: 18
	},

	releaseDate: "2019-03-29",

	abbreviations: {
		official: "DET",
		'fr-fr': "DPI"
	},

	thirdParty: {
		cardmarket: 2438,
		tcgplayer: 2409
	}
}

export default det1
