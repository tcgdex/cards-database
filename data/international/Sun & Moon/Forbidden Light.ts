import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm6: Set = {
	id: "sm6",

	name: {
		'en-us': "Forbidden Light",
		'fr-fr': "Lumière Interdite",
		'es-es': "Luz Prohibida",
		'it-it': "Apocalisse Di Luce",
		'de-de': "Grauen Der Lichtfinsternis",
		'pt-br': "Luz Proibida"
	},

	serie: serie,
	tcgOnline: "FLI",

	cardCount: {
		official: 131
	},

	releaseDate: "2018-05-04",

	abbreviations: {
		official: "FLI",
		'fr-fr': "LUI"
	},

	thirdParty: {
		cardmarket: 2075,
		tcgplayer: 2209
	}
}

export default sm6
