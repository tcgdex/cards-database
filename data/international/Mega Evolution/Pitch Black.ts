import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me05",

	name: {
		'de-de': "Dunkelnacht",
		'en-us': "Pitch Black",
		'es-es': "Oscuridad Absoluta",
		'es-mx': "Tinieblas Umbrías",
		'fr-fr': "Nuit Noire",
		'it-it': "Buio Pesto",
		'pt-br': "Escuridão Absoluta"
	},

	serie: serie,

	cardCount: {
		official: 84
	},

	releaseDate: "2026-07-17",

	abbreviations: {
		official: "PBL"
	},

	thirdParty: {
		tcgplayer: 24688,
		cardmarket: 6569
	}
}

export default set
