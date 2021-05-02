import { Set } from '../../interfaces'
import serie from '../EX'

const ex3: Set = {
	id: "ex3",

	name: {
		en: "Dragon",
		fr: "Dragon"
	},

	serie: serie,
	tcgOnline: "DR",

	cardCount: {
		total: 100,
		official: 97
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2003-11-24",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default ex3
