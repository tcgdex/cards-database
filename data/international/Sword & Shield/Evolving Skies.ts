import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh7: Set = {
	id: "swsh7",

	name: {
		'en-us': "Evolving Skies",
		'fr-fr': "Évolution Céleste",
		'es-es': "Cielos Evolutivos",
		'de-de': "Drachenwandel",
		'it-it': "Evoluzioni Eteree",
		'pt-br': "Céus em Evolução",
	},

	tcgOnline: 'EVS',
	serie: serie,

	cardCount: {
		official: 203
	},

	releaseDate: "2021-08-27",

	abbreviations: {
		official: "EVS",
		'fr-fr': "EVC"
	},

	thirdParty: {
		cardmarket: 4328,
		tcgplayer: 2848
	}
}

export default swsh7
