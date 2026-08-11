import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv01",

	name: {
		'de-de': "Karmesin & Purpur",
		'en-us': "Scarlet & Violet",
		'es-es': "Escarlata y Púrpura",
		'fr-fr': "Écarlate et Violet",
		'it-it': "Scarlatto e Violetto",
		'pt-br': "Escarlate e Violeta"
	},

	serie: serie,

	cardCount: {
		official: 198
	},

	releaseDate: "2023-03-31",

	abbreviations: {
		official: "SVI",
		'fr-fr': "E&V"
	},

	thirdParty: {
		cardmarket: 5223,
		tcgplayer: 22873
	}
}

export default set
