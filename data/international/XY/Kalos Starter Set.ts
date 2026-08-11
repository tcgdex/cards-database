import { Set } from 'models/database/set'
import serie from '../XY'

const xy0: Set = {
	id: "xy0",

	name: {
		'en-us': "Kalos Starter Set",
		'fr-fr': "Bienvenue à Kalos",
		'it-it': "Benvenuti a Kalos",
		'de-de': "Willkommen in Kalos",
		'pt-br': "Conjunto para Iniciantes Kalos",
		ru: 'Стартовый Набор Калоса'
	},

	serie: serie,
	tcgOnline: "KSS",

	cardCount: {
		official: 39
	},

	releaseDate: "2013-11-08",

	abbreviations: {
		official: "KSS",
		'fr-fr': "BAK"
	},

	thirdParty: {
		cardmarket: 1637,
		tcgplayer: 1522
	}
}

export default xy0
