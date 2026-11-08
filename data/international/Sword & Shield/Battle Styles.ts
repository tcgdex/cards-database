import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh5: Set = {
	id: "swsh5",

	name: {
		'en-us': "Battle Styles",
		'fr-fr': "Styles de combat",
		'es-es': "Estilos de Combate",
		'it-it': "Stili di Lotta",
		'de-de': "Kampfstile",
		'pt-br': "Estilos de Batalha"
	},

	tcgOnline: 'BST',
	serie: serie,

	cardCount: {
		official: 163
	},

	releaseDate: "2021-03-19",

	abbreviations: {
		official: "BST",
		'fr-fr': "STC"
	},

	thirdParty: {
		cardmarket: 3675,
		tcgplayer: 2765
	}
}

export default swsh5
