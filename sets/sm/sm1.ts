import Set from '../../interfaces/Set'

const set: Set = {
	name: {
		en: "Sun & Moon",
		fr: "Soleil et Lune",
	},
	code: "sm1",
	expansionCode: "sm",
	tcgoCode: "SUM",

	cardCount: {
		total: 172,
		official: 149
	},

	api: "1-sm",

	releaseDate: "2017-02-03",

	legal: {
		standard: false,
		expanded: true,
	},

	images: {
		symbol: "https://assets.tcgdex.net/sets/sm/sm1/symbol.png",
		logo: "https://assets.tcgdex.net/sets/sm/sm1/logo.png"
	}
}

export default set
