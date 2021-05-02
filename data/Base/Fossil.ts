import { Set } from '../../interfaces'
import serie from '../Base'

const base3: Set = {
	id: "base3",

	name: {
		en: "Fossil",
		fr: "Fossile"
	},

	serie: serie,
	tcgOnline: "FO",

	cardCount: {
		total: 62,
		official: 62
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "1999-10-10",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default base3
