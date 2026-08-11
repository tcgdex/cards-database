import { Set } from 'models/database/set'
import serie from '../Mega Evolution'

const set: Set = {
	id: "me03",

	name: {
		'de-de': "Optimale Ordnung",
		'en-us': "Perfect Order",
		'es-es': "Equilibrio Perfecto",
		'es-mx': 'Equilibrio Perfecto',
		'fr-fr': "Équilibre Parfait",
		'it-it': "Equilibrio Perfetto",
		'pt-br': "Equilíbrio Perfeito"
	},

	serie: serie,

	cardCount: {
		official: 88
	},

	releaseDate: "2026-03-27",

	abbreviations: {
		official: "POR",
		'fr-fr': "ORP"
	},

	thirdParty: {
		cardmarket: 6443,
		tcgplayer: 24587
	}
}

export default set
