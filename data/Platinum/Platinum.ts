import { Set } from '../../interfaces'
import serie from '../Platinum'

const pl1: Set = {
	id: "pl1",

	name: {
		en: "Platinum",
		fr: "Platine"
,
	},

	serie: serie,
	tcgOnline: "PL",

	cardCount: {
		total: 133,
		official: 127
	},

	legal: {
		expanded: false,
		standard: false
	},

	releaseDate: "2009-02-11",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default pl1
