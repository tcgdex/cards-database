import { Set } from 'models/database/set'
import serie from '../Scarlet & Violet'

const set: Set = {
	id: "sv10.5b",

	name: {
		'de-de': "Schwarze Blitze",
		'en-us': "Black Bolt",
		'es-es': "Fulgor Negro",
		"es-mx": "Fulgor Negro",
		'fr-fr': "Foudre Noire",
		'it-it': "Luce Nera",
		'pt-br': "Raio Preto"
	},

	serie: serie,

	cardCount: {
		official: 86
	},

	releaseDate: "2025-07-17",

	abbreviations: {
		official: "BLK"
	},

	thirdParty: {
		cardmarket: 6134,
		tcgplayer: 24325
	}
}

export default set
