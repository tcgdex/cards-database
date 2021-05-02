import { Set } from '../../interfaces'
import serie from '../Neo'

const neo2: Set = {
	id: "neo2",

	name: {
		en: "Neo Discovery",
	},

	serie: serie,
	tcgOnline: "N2",

	cardCount: {
		total: 75,
		official: 75
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2001-06-01",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default neo2
