import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm10: Set = {
	id: "sm10",

	name: {
		'en-us': "Unbroken Bonds",
		'fr-fr': "Alliance Infaillible",
		'es-es': "Vínculos Indestructibles",
		'it-it': "Legami Inossidabili",
		'de-de': "Kräfte im Einklang",
		'pt-br': "Elos Inquebráveis"
	},

	serie: serie,
	tcgOnline: "UNB",

	cardCount: {
		official: 214
	},

	releaseDate: "2019-05-03",

	abbreviations: {
		official: "UNB",
		'fr-fr': "AIF"
	},

	thirdParty: {
		cardmarket: 2437,
		tcgplayer: 2420
	}
}

export default sm10
