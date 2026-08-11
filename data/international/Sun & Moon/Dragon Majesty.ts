import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm75: Set = {
	id: "sm7.5",

	name: {
		'en-us': "Dragon Majesty",
		'fr-fr': "Majesté Des Dragons",
		'es-es': "Majestad De Dragones",
		'it-it': "Trionfo Dei Draghi",
		'de-de': "Majestät Der Drachen",
		'pt-br': "Dragões Soberanos"
	},

	serie: serie,
	tcgOnline: "DRM",

	cardCount: {
		official: 70
	},

	releaseDate: "2018-09-07",

	abbreviations: {
		official: "DRM",
		'fr-fr': "MDD"
	},

	thirdParty: {
		cardmarket: 2351,
		tcgplayer: 2295
	}
}

export default sm75
