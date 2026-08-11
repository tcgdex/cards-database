import { Set } from 'models/database/set'
import serie from '../Base'

const base1: Set = {
	id: "base1",

	name: {
		'en-us': "Base Set",
		'fr-fr': "Set de Base",
		'es-es': "Edición Básica",
		'it-it': "Set Base",
		'de-de': "Grundset",
		'pt-br': "Coleção Básica",
		'nl-nl': 'Basis Set'
	},

	serie: serie,
	tcgOnline: "BS",

	cardCount: {
		official: 102
	},

	releaseDate: "1999-01-09",

	abbreviations: {
		official: "BS",
		'fr-fr': "BAS"
	},

	thirdParty: {
		cardmarket: 1523,
		tcgplayer: 604
	}
}

export default base1
