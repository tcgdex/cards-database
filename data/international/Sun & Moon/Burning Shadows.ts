import { Set } from 'models/database/set'
import serie from '../Sun & Moon'

const sm3: Set = {
	id: "sm3",

	name: {
		'en-us': "Burning Shadows",
		'fr-fr': "Ombres Ardentes",
		'es-es': "Sombras Ardientes",
		'it-it': "Ombre Infuocate",
		'de-de': "Nacht in Flammen",
		'pt-br': "Sombras Ardentes"
	},

	serie: serie,
	tcgOnline: "BUS",

	cardCount: {
		official: 147
	},

	releaseDate: "2017-08-04",

	abbreviations: {
		official: "BUS",
		'fr-fr': "OAR"
	},

	thirdParty: {
		cardmarket: 1824,
		tcgplayer: 1957
	}
}

export default sm3
