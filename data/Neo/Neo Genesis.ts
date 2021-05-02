import { Set } from '../../interfaces'
import serie from '../Neo'

const neo1: Set = {
	id: "neo1",

	name: {
		en: "Neo Genesis",
	},

	serie: serie,
	tcgOnline: "N1",

	cardCount: {
		total: 111,
		official: 111
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2000-12-16",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default neo1
