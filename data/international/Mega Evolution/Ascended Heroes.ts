import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me02.5",

	name: {
		'de-de': "Erhabene Helden",
		'en-us': "Ascended Heroes",
		'es-es': "Héroes Ascendentes",
		'es-mx': 'Ascenso Heroico',
		'fr-fr': "Héros Transcendants",
		'it-it': "Ascesa Eroica",
		'pt-br': "Heróis Excelsos"
	},

	serie: serie,

	cardCount: {
		official: 217
	},

	releaseDate: "2026-01-30",

	abbreviations: {
		official: "ASC",
		'fr-fr': "HER"
	},

	thirdParty: {
		cardmarket: 6395,
		tcgplayer: 24541
	}
}

export default set
