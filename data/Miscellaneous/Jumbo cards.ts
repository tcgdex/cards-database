import { Set } from '../../interfaces'
import serie from '../Miscellaneous'

const jumbo: Set = {
	id: "jumbo",

	name: {
		en: "Jumbo cards",
		fr: "Cartes Jumbo"
,
	},

	serie: serie,

	cardCount: {
		total: 160,
		official: 160
	},

	releaseDate: "2000-02-01",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default jumbo
