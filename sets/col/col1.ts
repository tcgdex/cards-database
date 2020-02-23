import Set from '../../interfaces/Set'

const set: Set = {
	name: {
		en: "Call of Legends",
		fr: "L'appel des Légendes",
	},
	code: "col1",
	expansionCode: "col",
	tcgoCode: "CL",

	cardCount: {
		total: 106,
		official: 95
	},

	api: "6-call-of-legends",

	releaseDate: "2011-02-09",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/sets/col/col1/symbol.png",
		logo: "https://assets.tcgdex.net/en/sets/col/col1/logo.png"
	}
}

export default set
