import { Set } from '../../interfaces'
import serie from '../E-Card'

const sp: Set = {
	id: "sp",

	name: {
		en: "Sample",
		fr: "Sample"
	},

	serie: serie,

	cardCount: {
		total: 10,
		official: 10
	},

	releaseDate: "2002-08-01",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default sp
