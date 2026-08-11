import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const smp: Set = {
	id: "smp",

	name: {
		'en-us': "SM Black Star Promos",
		'pt-br': "Sol e Lua Promos",
		'fr-fr': "Promo SM",
		'es-es': "SL Cartas de promoción",
		'it-it': "SL Promo",
		'de-de': "SM Promokarten"
	},

	serie: serie,
	tcgOnline: "PR-SM",

	cardCount: {
		official: 248
	},

	releaseDate: "2017-02-03",

	abbreviations: {
		official: "SMP",
		'fr-fr': "PSM"
	},

	thirdParty: {
		tcgplayer: 1861
	}
}

export default smp
