import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh1: Set = {
	id: "swsh1",

	name: {
		'en-us': "Sword & Shield",
		'fr-fr': "Épée et Bouclier",
		'es-es': "Espada y Escudo",
		'it-it': "Spada e Scudo",
		'de-de': "Schwert & Schild",
		'pt-br': "Espada e Escudo"
	},

	tcgOnline: 'SSH',
	serie: serie,

	cardCount: {
		official: 202
	},

	releaseDate: "2020-02-07",

	abbreviations: {
		official: "SSH",
		'fr-fr': "E&B"
	},

	thirdParty: {
		cardmarket: 2921,
		tcgplayer: 2585
	}
}

export default swsh1
