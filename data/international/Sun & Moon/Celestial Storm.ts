import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm7: Set = {
	id: "sm7",

	name: {
		'en-us': "Celestial Storm",
		'fr-fr': "Tempête Céleste",
		'es-es': "Tormenta Celestial",
		'it-it': "Tempesta Astrale",
		'de-de': "Sturm Am Firmament",
		'pt-br': "Tempestade Celestial"
	},

	serie: serie,
	tcgOnline: "CES",

	cardCount: {
		official: 168
	},

	releaseDate: "2018-08-03",

	abbreviations: {
		official: "CES",
		'fr-fr': "TCE"
	},

	thirdParty: {
		cardmarket: 2320,
		tcgplayer: 2278
	}
}

export default sm7
