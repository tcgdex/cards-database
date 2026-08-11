import { Set } from 'models/database/set'
import serie from '../Diamond & Pearl'

const dp2: Set = {
	id: "dp2",

	name: {
		'en-us': "Mysterious Treasures",
		'fr-fr': "Trésors Mystérieux",
		'es-es': "Tesoros Misteriosos",
		'it-it': "Tesori Misteriosi",
		'de-de': "Geheimnisvolle Schätze",
		'pt-br': "Tesouros Misteriosos",
		'pl-pl': 'Tajemne Skarby'
	},

	serie: serie,
	tcgOnline: "MT",

	cardCount: {
		official: 123
	},

	releaseDate: "2007-08-01",

	abbreviations: {
		official: "MT",
		'fr-fr': "TMY"
	},

	thirdParty: {
		cardmarket: 1556,
		tcgplayer: 1368
	}
}

export default dp2
