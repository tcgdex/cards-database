import { Set } from '../../interfaces'
import serie from '../POP'

const pop1: Set = {
	id: "pop1",

	name: {
		en: "POP Series 1",
	},

	serie: serie,

	cardCount: {
		total: 17,
		official: 17
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2004-09-01",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default pop1
