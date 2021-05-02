import { Set } from '../../interfaces'
import serie from '../Base'

const base2: Set = {
	id: "base2",

	name: {
		en: "Jungle",
		fr: "Jungle"
	},

	serie: serie,
	tcgOnline: "JU",

	cardCount: {
		total: 64,
		official: 64
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "1999-06-16",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default base2
