import Set from '@tcgdex/sdk/interfaces/Set'
import ecard from '../../expansions/ecard'

const set: Set = {
	name: {
		en: "Sample"
	},

	code: "sp",

	expansion: ecard,

	cardCount: {
		total: 10,
		official: 10
	},

	releaseDate: "2002-08-01", //day not found

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/ecard/sp/symbol"
	},

	availability: {
		fr: false
	}
}

export default set
