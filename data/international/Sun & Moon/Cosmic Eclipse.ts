import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm12: Set = {
	id: "sm12",

	name: {
		'en-us': "Cosmic Eclipse",
		'fr-fr': "Éclipse Cosmique",
		'es-es': "Eclipse Cósmico",
		'it-it': "Eclissi Cosmica",
		'de-de': "Welten im Wandel",
		'pt-br': "Eclipse Cósmico"
	},

	serie: serie,
	tcgOnline: "CEC",

	cardCount: {
		official: 236
	},

	releaseDate: "2019-11-01",

	abbreviations: {
		official: "CEC",
		'fr-fr': "ECO"
	},

	thirdParty: {
		cardmarket: 2644,
		tcgplayer: 2534
	}
}

export default sm12
