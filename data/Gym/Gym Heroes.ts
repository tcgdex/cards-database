import { Set } from '../../interfaces'
import serie from '../Gym'

const gym1: Set = {
	id: "gym1",

	name: {
		en: "Gym Heroes",
		fr: "Gym Heroes"
	},

	serie: serie,
	tcgOnline: "G1",

	cardCount: {
		total: 132,
		official: 132
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2000-08-14",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default gym1
