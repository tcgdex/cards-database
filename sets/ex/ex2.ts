import Set from '../../interfaces/Set'

const set: Set = {
	name: {
		en: "Sandstorm"
	},
	code: "ex2",
	expansionCode: "ex",
	tcgoCode: "SS",

	cardCount: {
		total: 100,
		official: 100
	},

	api: "1-ex-sandstorm",


	releaseDate: "2003-09-18", // or 17 depending on the source

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/sets/ex/ex2/symbol.png",
		logo: "https://assets.tcgdex.net/sets/ex/ex2/logo.png"
	}
}

export default set
