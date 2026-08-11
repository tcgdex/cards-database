import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh35: Set = {
	id: "swsh3.5",

	name: {
		'en-us': "Champion's Path",
		'fr-fr': 'La Voie du Maître',
		'es-es': "Camino de Campeones",
		'it-it': "Futuri Campioni",
		'de-de': "Weg des Champs",
		'pt-br': "Caminho do Campeão"
	},

	tcgOnline: 'CPA',
	serie: serie,

	cardCount: {
		official: 73
	},

	releaseDate: "2020-09-25",

	abbreviations: {
		official: "CPA",
		'fr-fr': "VDM"
	},

	thirdParty: {
		cardmarket: 3419,
		tcgplayer: 2685
	}
}

export default swsh35
