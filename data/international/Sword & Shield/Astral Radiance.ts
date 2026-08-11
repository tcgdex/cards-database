import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh10: Set = {
	id: "swsh10",

	name: {
		'en-us': "Astral Radiance",
		'fr-fr': "Astres Radieux",
		'es-es': "Resplandor Astral",
		'it-it': "Lucentezza Siderale",
		'de-de': "Astralglanz",
		'pt-br': "Estrelas Radiantes"
	},

	tcgOnline: 'ASR',
	serie: serie,

	cardCount: {
		official: 189
	},

	releaseDate: "2022-05-27",

	abbreviations: {
		official: "ASR",
		'fr-fr': "ASR"
	},

	thirdParty: {
		cardmarket: 4979,
		tcgplayer: 3040
	}
}

export default swsh10
