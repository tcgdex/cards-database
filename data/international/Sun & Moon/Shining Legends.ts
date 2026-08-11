import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm35: Set = {
	id: "sm3.5",

	name: {
		'en-us': "Shining Legends",
		'fr-fr': "Légendes Brillantes",
		'es-es': "Leyendas Luminosas",
		'it-it': "Leggende Iridescenti",
		'de-de': "Schimmernde Legenden",
		'pt-br': "Lendas Luminescentes"
	},

	serie: serie,
	tcgOnline: "SLG",

	cardCount: {
		official: 73
	},

	releaseDate: "2017-10-06",

	abbreviations: {
		official: "SLG",
		'fr-fr': "LBR"
	},

	thirdParty: {
		cardmarket: 1842,
		tcgplayer: 2054
	}
}

export default sm35
