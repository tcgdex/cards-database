import { Set } from 'models/database/set'
import serie from '../Call of Legends'

const col1: Set = {
	id: "col1",

	name: {
		'en-us': "Call of Legends",
		'fr-fr': "L'appel des Légendes",
		'it-it': "Richiamo delle Leggende",
		'de-de': "Ruf der Legenden",
		'pt-br': "Chamado das Lendas",
		'es-es': "Llamada de las Leyendas" // NOTE: only went out in the TCGO
	},

	serie: serie,
	tcgOnline: "CL",

	cardCount: {
		official: 95
	},

	releaseDate: "2011-02-09",

	abbreviations: {
		official: "COL",
		'fr-fr': "LDL"
	},

	thirdParty: {
		cardmarket: 1570,
		tcgplayer: 1415
	}
}

export default col1
