import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh9: Set = {
	id: "swsh9",

	name: {
		'en-us': "Brilliant Stars",
		'fr-fr': "Stars Étincelantes",
		'es-es': "Astros Brillantes",
		'it-it': "Astri Lucenti",
		'de-de': "Strahlende Sterne",
		'pt-br': "Astros Cintilantes"
	},

	tcgOnline: 'BRS',
	serie: serie,

	cardCount: {
		official: 172
	},

	releaseDate: "2022-02-25",

	abbreviations: {
		official: "BRS",
		'fr-fr': "STA"
	},

	thirdParty: {
		cardmarket: 4434,
		tcgplayer: 2948
	}
}

export default swsh9
