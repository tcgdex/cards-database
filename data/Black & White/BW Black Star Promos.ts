import { Set } from '../../interfaces'
import serie from '../Black & White'

const bwp: Set = {
	id: "bwp",

	name: {
		en: "BW Black Star Promos",
		fr: "Promo BW"
	},

	serie: serie,
	tcgOnline: "PR-BLW",

	cardCount: {
		total: 101,
		official: 101
	},

	releaseDate: "2011-04-26",

	legal: {
		standard: false,
		expanded: true
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default bwp
