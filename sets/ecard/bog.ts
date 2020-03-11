import Set from '@tcgdex/sdk/interfaces/Set'
import ecard from '../../expansions/ecard'

const set: Set = {
	name: {
		en: "Best of game"
	},

	code: "bog",

	expansion: ecard,

	cardCount: {
		total: 9,
		official: 9
	},

	releaseDate: "2002-12-01", //day not found

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/ecard/sp/symbol"
	},

	availability: {
		fr: false
	}
}

export default set
