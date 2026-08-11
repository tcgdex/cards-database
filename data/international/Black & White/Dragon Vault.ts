import { Set } from 'models/database/set'
import serie from '../Black & White'

const dv1: Set = {
	id: "dv1",

	name: {
		'en-us': "Dragon Vault",
		'fr-fr': "Coffre des Dragons",
		'it-it': "Tesoro dei Draghi",
		'de-de': "Drachengruft",
		'es-es': "Tesoro de Dragones", // NOTE: only went in the TCGO
		'pt-br': "Cofre do Dragão"
	},

	serie: serie,
	tcgOnline: "DRV",

	cardCount: {
		official: 20
	},

	releaseDate: "2012-10-05",

	abbreviations: {
		official: "DRV",
		'fr-fr': "CDR"
	},

	thirdParty: {
		cardmarket: 1636,
		tcgplayer: 1426
	}
}

export default dv1
