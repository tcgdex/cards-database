import { Set } from 'models/database/set'
import serie from '../XY'

const g1: Set = {
	id: "g1",

	name: {
		'en-us': "Generations",
		'fr-fr': "Générations",
		'es-es': "Generaciones",
		'it-it': "Generazioni",
		'de-de': "Generationen",
		'pt-br': "Gerações"
	},

	serie: serie,
	tcgOnline: "GEN",

	cardCount: {
		official: 83
	},

	releaseDate: "2016-02-22",

	abbreviations: {
		official: "GEN",
		'fr-fr': "GEN"
	},

	thirdParty: {
		cardmarket: 1693,
		tcgplayer: 1728
	}
}

export default g1
