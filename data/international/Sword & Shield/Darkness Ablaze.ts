import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh3: Set = {
	id: "swsh3",

	name: {
		'en-us': "Darkness Ablaze",
		'fr-fr': "Ténèbres Embrasées",
		'es-es': "Oscuridad Incandescente",
		'it-it': "Fiamme Oscure",
		'de-de': "Flammende Finsternis",
		'pt-br': "Escuridão Incandescente"
	},

	tcgOnline: 'DAA',
	serie: serie,

	cardCount: {
		official: 189
	},

	releaseDate: "2020-08-14",

	abbreviations: {
		official: "DAA",
		'fr-fr': "TEM"
	},

	thirdParty: {
		cardmarket: 3199,
		tcgplayer: 2675
	}
}

export default swsh3
